import Decimal from "decimal.js";
import { useMarketTicker } from "../marketTicker";

export const useCheckAvailableRemain = () => {
  const { getSymbolMarketTicker } = useMarketTicker();
  const getAvailableQuote = (marketSymbol?: string) => {
    if (!marketSymbol) {
      return 0;
    }
    const targetMakret = getSymbolMarketTicker(marketSymbol);
    const availableRemain = targetMakret?.quoteCurrency?.availableRemain || 0;
    return availableRemain;
  };
  const getAvailableBase = (marketSymbol: string) => {
    if (!marketSymbol) {
      return 0;
    }
    const targetMakret = getSymbolMarketTicker(marketSymbol);
    const availableRemain = targetMakret?.baseCurrency?.availableRemain || 0;
    return availableRemain;
  };
  const checkIRR = (value: number, baseCurrencySymbol?: string) => {
    const targetMakret = baseCurrencySymbol
      ? getSymbolMarketTicker(`${baseCurrencySymbol}IRR`)
      : undefined;
    const availableRemain = targetMakret?.quoteCurrency?.availableRemain || 0;
    const shouldCharge =
      new Decimal(value)
        .mul(targetMakret?.lastPrice || 0)
        .minus(Number(availableRemain))
        .toNumber() > 0;
    return {
      availableRemain,
      shouldCharge,
    };
  };

  return {
    getAvailableQuote,
    getAvailableBase,
    checkIRR,
  };
};
