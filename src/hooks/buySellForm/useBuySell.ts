import Decimal from "decimal.js";
import { groupBy, map } from "lodash-es";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import {
  AppOrderSide,
  AppOrderType,
  usePostExchangeV1PrivateOrder,
  usePostPaymentV1PrivateEpayrequestCharge,
  usePostPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder,
} from "../../services";
import { MarketTicker, useMarketTicker } from "../marketTicker";
import { useConvertBaseToQuote } from "../useConvertBaseToQuote";
import { BuySellContext, BuySellProps } from "./context";

type OrderProps = {
  triggerBeforeOrder?: () => void;
  type: AppOrderType;
  side: AppOrderSide;
};

type Charge = {
  redirectUrl: string;
  clientId?: string;
};

type SelectedQueries = {
  crypto?: string;
  fiat?: string;
};

export const useBuySell = (callbacks?: BuySellProps) => {
  if (typeof BuySellContext.context === "undefined") {
    throw new Error("You must use this hook under the BuySellProvider.");
  }

  const { handleSubmit, reset, setValue } = BuySellContext.useFormContext();
  const convert = useConvertBaseToQuote();

  const { lastChangeInput, recieve, selected, spend, shouldCharge } =
    BuySellContext.useWatch();

  const { getSymbolMarketTicker, marketsTicker } = useMarketTicker();

  const selectedMarket = getSymbolMarketTicker(selected);

  const isChargeable = selectedMarket?.quoteCurrency?.canCharge;

  const availableRemain = selectedMarket?.quoteCurrency?.availableRemain || 0;

  const marketsTickerGrouped = map(
    groupBy(
      marketsTicker?.filter((item) => item.quoteCurrency?.canCharge),
      (item) => item.quoteAsset,
    ),
    (item) => item[0],
  );

  const selectedAssignedValue = useCallback(
    ({ crypto, fiat }: SelectedQueries) => {
      if (selected || !marketsTickerGrouped.length) {
        return;
      }

      let _selected: MarketTicker | undefined;

      if (crypto) {
        _selected = marketsTickerGrouped.find(
          (item) => item?.baseAsset?.toLowerCase() === crypto.toLowerCase(),
        );
      } else if (fiat) {
        _selected = marketsTickerGrouped.find(
          (item) => item?.quoteAsset?.toLowerCase() === fiat.toLowerCase(),
        );
      } else {
        _selected = marketsTickerGrouped[0];
      }

      setValue(
        "selected",
        _selected?.symbol || marketsTickerGrouped[0]?.symbol,
      );
    },
    [marketsTickerGrouped, selected, setValue],
  );

  const convertedBaseQuantity = convert(
    Number(recieve || 0),
    selectedMarket?.baseAsset,
    selectedMarket?.quoteAsset,
  );

  const {
    mutate: placeOrder,
    error: orderError,
    isLoading: isOrderLoading,
    reset: resetApi,
  } = usePostExchangeV1PrivateOrder({
    onSuccess: (data) => {
      callbacks?.onSuccess?.(data);
      reset();
    },
    onError: (error) => {
      callbacks?.onError?.(error);
    },
  });

  const { mutate: requestCharge, isLoading: isLoadingCharge } =
    usePostPaymentV1PrivateEpayrequestCharge({
      onSuccess: (data) => {
        window.location.href = data?.paymentLink || "";
      },
    });

  const { mutate: postAction, isLoading: isLoadingPostAction } =
    usePostPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder<Charge>({
      onSuccess: ({ postActionUniqueId }, { _extraVariables }) => {
        const clientUniqueId = _extraVariables?.clientId || uuidv4();
        const requiredAmount =
          lastChangeInput === "spend"
            ? new Decimal(spend || 0).minus(availableRemain)
            : new Decimal(convertedBaseQuantity).minus(availableRemain);

        requestCharge({
          requestBody: {
            userWalletCurrencySymbol: selectedMarket?.quoteAsset,
            amount: requiredAmount.toNumber(),
            clientUniqueId: clientUniqueId,
            redirectType: "Redirect",
            redirectUrl: window.location.origin + _extraVariables?.redirectUrl,
            postActionUniqueId,
          },
        });
      },
    });

  const charge = ({ redirectUrl, clientId }: Charge) => {
    const quoteQuantity =
      lastChangeInput === "spend"
        ? Number(spend)
        : new Decimal(convertedBaseQuantity).minus(availableRemain).toNumber();

    postAction({
      requestBody: {
        marketType: "Spot",
        postActionStatus: "Success",
        postActionNature: "PlaceMarketBuyOrder",
        quoteQuantity,
        marketSymbol: selected,
      },
      _extraVariables: { redirectUrl, clientId },
    });
  };
  const onSubmit = async ({ type, side, triggerBeforeOrder }: OrderProps) => {
    await new Promise((resolve) => resolve(triggerBeforeOrder?.()));

    const quantity =
      side === "BUY"
        ? lastChangeInput === "recieve"
          ? Number(recieve)
          : undefined
        : lastChangeInput === "spend"
        ? Number(spend)
        : undefined;

    const quoteOrderQty =
      side === "BUY"
        ? lastChangeInput === "spend"
          ? Number(spend)
          : undefined
        : lastChangeInput === "recieve"
        ? Number(recieve)
        : undefined;

    const order = () => {
      placeOrder({
        requestBody: {
          type,
          symbol: selected,
          quantity,
          quoteOrderQty,
          side,
          orderSourceType: side === "BUY" ? "InstantBuy" : "InstantSell",
        },
      });
    };

    handleSubmit(order)();
  };

  const isChargeLoading = isLoadingCharge || isLoadingPostAction;

  return {
    onSubmit,
    charge,
    isChargeLoading,
    isOrderLoading,
    isChargeable,
    orderError,
    shouldCharge,
    spend,
    recieve,
    selected,
    selectedMarket,
    lastChangeInput,
    selectedAssignedValue,
    reset: resetApi,
  };
};
