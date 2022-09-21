import { createFormContext } from "react-hook-form-context";

type AmountMode = "amount" | "total";

export type SellSelectType = {
  value: AmountMode;
  label?: string;
};

// Buy Form

export interface MarketOrderValues {
  stopPrice?: string;
  amount?: string;
  total?: string;
  slider?: number;
  selectedOption: SellSelectType;
}

const buyInitialValue: MarketOrderValues = {
  stopPrice: "",
  amount: "",
  total: "",
  slider: 0,
  selectedOption: { value: "amount" },
};

export const BuyForm = createFormContext(buyInitialValue);

// Sell Form

const sellInitialValue: MarketOrderValues = {
  stopPrice: "",
  amount: "",
  total: "",
  slider: 0,
  selectedOption: { value: "amount" },
};

export const SellForm = createFormContext(sellInitialValue);
