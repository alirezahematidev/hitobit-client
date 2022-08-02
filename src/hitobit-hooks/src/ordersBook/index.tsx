import { HubConnectionState } from "@microsoft/signalr";
import {
  OrderBookResponseVM,
  useGetExchangeV1PublicDepth,
} from "hitobit-services";
import { selectedSymbolStore } from "hitobit-store";
import { applyDepthMock } from "hitobit-utils";
import { groupBy, map, sumBy } from "lodash-es";
import moment from "moment-jalaali";
import {
  createContext,
  memo,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useMarketTicker } from "../marketTicker";
import { SocketConnection } from "../socketConnection";
import { useDebounceAnimationFrameCallback } from "../useDebounceAnimationFrameCallback";

if (__MOCK__) {
  applyDepthMock();
}

type BitAskState = {
  bids: [number, number][];
  asks: [number, number][];
  isLoading?: boolean;
};

const OrderBookContext = createContext<BitAskState>({
  bids: [],
  asks: [],
  isLoading: false,
});

type DepthItem = {
  e: string; // Event type
  E: number; // Event time
  s: string; // Symbol
  U: number; // First update ID in event
  u: number; // Final update ID in event
  b: [string, string][]; // Bids to be updated
  a: [string, string][]; // Asks to be updated
};

interface Props {
  children?: ReactNode;
}

const OrderBookProvider = memo<Props>(({ children }) => {
  const ordersRef = useRef<BitAskState>({ bids: [], asks: [] });
  const isDataFetched = useRef<boolean>(false);
  const ordersBufferRef = useRef<OrderBookResponseVM[]>([]);

  const { selectedSymbol } = selectedSymbolStore.useState();

  const { getSymbolMarketTicker, isMarketTickerLoading } = useMarketTicker();
  const marketTicker = getSymbolMarketTicker(selectedSymbol?.symbol);

  useEffect(() => {
    isDataFetched.current = false;
    ordersRef.current = { bids: [], asks: [] };
    ordersBufferRef.current = [];
  }, [selectedSymbol]);

  const { refetch, isLoading: isDepthLoading } = useGetExchangeV1PublicDepth(
    { symbol: selectedSymbol?.symbol, limit: 1000 },
    {
      enabled: __MOCK__ || false,
      cacheTime: 0,
      staleTime: 0,
      onSuccess: (data) => {
        isDataFetched.current = true;

        ordersBufferRef.current = ordersBufferRef.current.filter(
          (item) => !(item.lastUpdateId <= data.lastUpdateId),
        );

        const asks = (data?.asks || []) as [number, number][];

        const bids = (data?.bids || []) as [number, number][];

        ordersRef.current = {
          bids: bids,
          asks: asks,
        };

        if (ordersBufferRef.current.length > 0) {
          ordersBufferRef.current.forEach((_data) => {
            handleDepthChange(_data);
          });
        } else {
          handleDepthChange();
        }
      },
    },
  );
  const [state, setState] = useState<BitAskState>({ bids: [], asks: [] });
  const throttledSetOrders = useDebounceAnimationFrameCallback(setState, []);

  const handleDepthChange = (data?: OrderBookResponseVM) => {
    const _bids = (data?.bids as [number, number][]) || [];
    const _asks = (data?.asks as [number, number][]) || [];

    const { bids, asks } = ordersRef.current;

    const bidsMap = mergeOrders(bids, _bids);

    const asksMap = mergeOrders(asks, _asks);

    ordersRef.current = {
      bids: bidsMap,
      asks: asksMap,
    };

    throttledSetOrders(ordersRef.current);
  };

  SocketConnection.useEvent(
    `${selectedSymbol?.symbol.toLowerCase()}@depth`,
    (data: DepthItem) => {
      const { E, s, U, u, b, a } = data;

      if (s.toLowerCase() !== selectedSymbol?.symbol.toLowerCase()) {
        return;
      }

      const humanizedData: OrderBookResponseVM = {
        lastUpdateId: u,
        bids: b.map(([price, quantity]) => [Number(price), Number(quantity)]),
        asks: a.map(([price, quantity]) => [Number(price), Number(quantity)]),
        lastUpdateIdStream: u,
        transactionTime: moment(E).local().toISOString(),
        firstUpdateId: U,
        symbol: s,
      };

      if (isDataFetched.current) {
        handleDepthChange(humanizedData);
        return;
      }

      ordersBufferRef.current.push(humanizedData);
    },
    {
      enabled: !!selectedSymbol?.symbol,
    },
  );

  useEffect(() => {
    if (!marketTicker) {
      return;
    }

    const interval = setInterval(() => {
      if (
        SocketConnection.SocketConnection?.connection?.state ===
        HubConnectionState.Connected
      ) {
        clearInterval(interval);

        refetch();
      }
    }, 500);

    ordersBufferRef.current = [];
    isDataFetched.current = false;

    return () => {
      clearInterval(interval);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    selectedSymbol?.symbol,
    marketTicker?.smartTradeEngine,
    marketTicker?.lastMarketInfoChangeDate,
  ]);

  const isLoading = isMarketTickerLoading || isDepthLoading;

  const value = useMemo(() => ({ ...state, isLoading }), [isLoading, state]);

  return (
    <OrderBookContext.Provider value={value}>
      {children}
    </OrderBookContext.Provider>
  );
});

const mergeOrders = (
  oldList: [number, number][],
  newList: [number, number][],
) => {
  const oldGroup = groupBy(oldList, ([price]) => price);
  const newGroup = groupBy(newList, ([price]) => price);

  const group = map({ ...oldGroup, ...newGroup }, (o, idxPrice) => {
    return [Number(idxPrice), sumBy(o, ([, amount]) => amount)];
  }) as [number, number][];

  return group.filter(([, amount]) => amount !== 0);
};

const useOrdersBook = () => {
  const state = useContext(OrderBookContext);

  return state;
};

export { OrderBookProvider, useOrdersBook };
