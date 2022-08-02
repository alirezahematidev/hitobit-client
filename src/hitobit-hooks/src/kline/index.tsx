import {
  KlineDataResponseVM,
  KLineInterval,
  useGetExchangeV1PublicKlines,
} from "hitobit-services";
import { createContext, ReactNode, useContext } from "react";
import { useQueryClient } from "react-query";
import {
  HapiIntervalToSocket,
  SocketConnection,
  SocketIntervalToHapi,
} from "../socketConnection";

interface KlinesProviderProps {
  children: ReactNode;
  interval: KLineInterval;
  symbol: string;
}

const KlineContext = createContext<Omit<KlinesProviderProps, "children">>({
  interval: "OneDay",
  symbol: "",
});

const Provider = ({ children, symbol, interval }: KlinesProviderProps) => {
  const queryClient = useQueryClient();

  SocketConnection.useEvent(
    `${symbol?.toLowerCase()}@kline_${[HapiIntervalToSocket[interval]]}`,
    (data) => {
      if (!data) return;

      const newSymbol = data.s; // symbol
      const newInterval = SocketIntervalToHapi[data.k.i];

      const kline: KlineDataResponseVM = {
        openTime: new Date(data.k.t).getTime() as unknown as string, // Kline start time
        closeTime: new Date(data.k.T).getTime() as unknown as string, // Kline close time
        open: data.k.o, // Open price
        close: data.k.c, // Close price
        high: data.k.h, // High price
        low: data.k.l, // Low price
        baseVolume: data.k.v, // Base asset volume
        tradeCount: data.k.n, // Number of trades
        quoteVolume: data.k.q, // Quote asset volume
        takerBuyBaseVolume: data.k.V, // Taker buy base asset volume
        takerBuyQuoteVolume: data.k.Q, // Taker buy quote asset volume
        ignore: data.k.B, // Ignore
      };

      queryClient.setQueryData<KlineDataResponseVM[] | undefined>(
        useGetExchangeV1PublicKlines.info({
          symbol: newSymbol,
          interval: newInterval,
          limit: 200,
        }).key,
        (_prev) => {
          const prev = _prev || [];
          if (
            prev?.[prev?.length - 1]?.openTime &&
            Number(kline.openTime) ===
              new Date(prev[prev?.length - 1].openTime).getTime()
          ) {
            const copy = [...prev];
            copy[copy.length - 1] = kline;
            return copy;
          } else {
            return [...prev, kline].slice(-200);
          }
        },
      );
    },
    {
      enabled: !!symbol,
    },
  );

  return (
    <KlineContext.Provider value={{ interval, symbol }}>
      {children}
    </KlineContext.Provider>
  );
};

function useKlines() {
  if (typeof KlineContext === "undefined") {
    throw new Error("useKlines hook must be used under the KlinesProvider.");
  }

  const { interval, symbol } = useContext(KlineContext);

  const { data: klines, isLoading: isKlinesLoading } =
    useGetExchangeV1PublicKlines(
      { symbol, interval, limit: 200 },
      {
        cacheTime: 2 * 60 * 1000,
        staleTime: 2 * 60 * 1000,
        enabled: !!symbol,
      },
    );

  return {
    symbol,
    interval,
    klines,
    isKlinesLoading,
  };
}

const kline = {
  Provider,
  useKlines,
};

export { kline };
