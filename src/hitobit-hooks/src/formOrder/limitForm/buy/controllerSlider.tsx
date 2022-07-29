import Decimal from "decimal.js";
import { useStepSize, useUserSelectedUserAssets } from "hitobit-hooks";
import { selectedSymbolStore } from "hitobit-store";
import { ControllerRenderProps } from "react-hook-form";
import { BuyForm, LimitOrderValues } from "../types";

const ControllerSlider = ({
  render,
}: {
  render: (state: {
    field: ControllerRenderProps<LimitOrderValues, "slider">;
  }) => any;
}) => {
  const { selectedSymbol } = selectedSymbolStore.useState();

  const {
    setValue: buySetValue,
    getValues,
    trigger,
  } = BuyForm.useFormContext();

  const { toStepSize, toTickSize } = useStepSize(selectedSymbol?.symbol);

  const { quoteAvailableRemain } = useUserSelectedUserAssets();

  return (
    <BuyForm.Controller
      name="slider"
      render={({ field: { onChange, ...rest } }) =>
        render({
          field: {
            onChange: (_value) => {
              let _total: Decimal = new Decimal(0);
              const { price } = getValues();

              if (!price) {
                trigger(["price"]);
                return;
              }

              if (!quoteAvailableRemain) {
                return;
              }

              if (_value) {
                _total = new Decimal(quoteAvailableRemain).mul(_value).div(100);
              }

              buySetValue(
                "amount",
                _value ? toStepSize(_total.div(price)) : "",
              );

              buySetValue(
                "total",
                _value && quoteAvailableRemain ? toTickSize(_total) : "",
              );

              onChange(_value);

              trigger(["amount"]);
            },
            ...rest,
          },
        })
      }
    />
  );
};

export { ControllerSlider };
