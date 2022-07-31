import Decimal from "decimal.js";
import { useTranslation } from "hitobit-modules";
import { selectedSymbolStore } from "hitobit-store";
import { ControllerRenderProps } from "react-hook-form";
import { useOrderPlacingError } from "../../../useOrderPlacingError";
import { useStepSize } from "../../../useStepSize";
import { OcoOrderValues, SellForm } from "../types";

const ControllerLimit = ({
  render,
}: {
  render: (state: {
    field: ControllerRenderProps<OcoOrderValues, "limit">;
  }) => any;
}) => {
  const { t } = useTranslation();
  const { setValue: sellSetValue, getValues } = SellForm.useFormContext();

  const { selectedSymbol } = selectedSymbolStore.useState();

  const { toTickSize } = useStepSize(selectedSymbol?.symbol);

  const { getPriceError } = useOrderPlacingError();

  return (
    <SellForm.Controller
      name="limit"
      rules={{
        validate: {
          check: (value) => {
            if (!value) {
              return t("enterPrice");
            }

            return getPriceError({
              symbol: selectedSymbol?.symbol,
              price: Number(value),
            });
          },
        },
      }}
      render={({ field: { onChange, ...rest } }) =>
        render({
          field: {
            onChange: (limit) => {
              const { amount, price } = getValues();
              if (limit && amount) {
                const stopPriceTotal = toTickSize(
                  new Decimal(amount).mul(Number(price)),
                );
                const limitTotal = toTickSize(
                  new Decimal(amount).mul(Number(limit)),
                );
                if (Number(stopPriceTotal) > Number(limitTotal)) {
                  sellSetValue("total", stopPriceTotal);
                } else {
                  sellSetValue("total", limitTotal);
                }
              } else {
                sellSetValue("total", "");
              }
              onChange(limit);
            },
            ...rest,
          },
        })
      }
    />
  );
};

export { ControllerLimit };
