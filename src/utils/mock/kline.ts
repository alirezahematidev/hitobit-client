import { getExchangeV1PublicKlines, KlineDataResponseVM } from "../../services";
import { getMockAdapter } from "./mockAdapter";

const klineResponse: KlineDataResponseVM[] = [
  {
    openTime: 1647248170959,
    open: 9_000_000_000,
    high: 0,
    low: 0,
    close: 10_000_000_000,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 10_000_000_000,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  //
  {
    openTime: 1647248170959,
    open: 11_000_000_000,
    high: 0,
    low: 0,
    close: 10_000_000_000,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 10_000_000_000,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  //
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  //
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 0,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
  {
    openTime: 1647248170959,
    open: 10_000_000_000,
    high: 0,
    low: 0,
    close: 0,
    baseVolume: 0,
    closeTime: 1647248170959,
    quoteVolume: 0,
    tradeCount: 0,
    takerBuyBaseVolume: 0,
    takerBuyQuoteVolume: 0,
    ignore: 0,
  },
];

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
export const applyKlineMock = () => {
  const mock = getMockAdapter();

  mock.onGet(getExchangeV1PublicKlines.key).reply(200, klineResponse);
};
