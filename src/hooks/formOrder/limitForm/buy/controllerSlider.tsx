import Decimal from "decimal.js";
import { ControllerRenderProps } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { selectedSymbolStore } from "../../../../store";
import { useStepSize } from "../../../useStepSize";
import { useUserSelectedUserAssets } from "../../../useUserSelectedUserAssets";
import { BuyForm, LimitOrderValues } from "../types";

const ControllerSlider = ({
  render,
}: {
  render: (state: {
    field: ControllerRenderProps<LimitOrderValues, "slider">;
  }) => any;
}) => {
  const { selectedSymbol } = selectedSymbolStore.useState();

  const { t } = useTranslation();

  const {
    setValue: buySetValue,
    getValues,
    setError,
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
                setError("price", { message: t("enterPrice") });
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
