import { useTranslation } from "react-i18next";
import starkString from "starkstring";

type Abbreviation = "kilo" | "million" | "billion" | "trillion";

const digits: Record<Abbreviation, 4 | 7 | 10 | 13> = {
  kilo: 4,
  million: 7,
  billion: 10,
  trillion: 13,
};

interface Props {
  /** For example "kilo" mean 1,000+ (4 digits or more.) */
  abbreviation?: Abbreviation;
  input: number;
  numOfDecimals?: number;
}

export function useConvertNumToAbbr() {
  const { t } = useTranslation();

  const convertNumToAbbr = ({
    abbreviation,
    input,
    numOfDecimals = 2,
  }: Props) => {
    if (abbreviation) {
      const digit = digits[abbreviation];
      let abbrNum: number | null = null;
      let abbrSymbol: string | null = null;
      if (digit <= 10 && input >= 1_000_000_000) {
        abbrNum = input / 1_000_000_000;
        abbrSymbol = t("billion");
      } else if (digit <= 7 && input >= 1_000_000) {
        abbrNum = input / 1_000_000;
        abbrSymbol = t("million");
      } else if (digit <= 4 && input >= 1000) {
        abbrNum = input / 1000;
        abbrSymbol = t("kilo");
      }

      if (abbrNum && abbrSymbol) {
        return `${starkString(abbrNum)
          .toFixedNumber(numOfDecimals)
          .toCurrency()
          .toString()}${abbrSymbol}`;
      }
    }

    if (input > 0 && input < 1) {
      if (input < 1e-6) {
        return "< 0.0000001";
      } else {
        return Number(input);
      }
    }

    return input.toFixed(numOfDecimals);
  };

  return { convertNumToAbbr };
}
