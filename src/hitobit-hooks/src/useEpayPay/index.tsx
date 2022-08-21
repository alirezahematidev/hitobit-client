import {
  EpayPayWithWalletRequestVM,
  RequestError,
  useGetPaymentV1PublicEpayrequestInfoToken,
  usePostPaymentV1PrivateEpayrequestPaywithwallet,
  UserWalletDisplayResponseVM,
} from "hitobit-services";
import { useCallback } from "react";
import { useChargeAndPay } from "../useChargeAndPay";

const useEpayPay = ({
  selectedWallet,
  token,
  onSuccess,
  onErrorPayWithWallet,
  getAfterPayRedirectUri,
  redirectToPayLink,
}: {
  selectedWallet?: UserWalletDisplayResponseVM;
  token?: string;
  onSuccess?: (data: any, variables: EpayPayWithWalletRequestVM) => void;
  onErrorPayWithWallet?: (
    error: RequestError | Error,
    variables: EpayPayWithWalletRequestVM,
  ) => void;
  getAfterPayRedirectUri: (clientUniqueId: string) => string;
  redirectToPayLink: (paymentLink: string) => string;
}) => {
  const { data } = useGetPaymentV1PublicEpayrequestInfoToken(
    {
      token,
    },
    {
      enabled: !!token,
    },
  );

  const {
    mutate: epayRequestTokenPay,
    isLoading: epayRequestIsLoading,
    error,
    reset: resetEPay,
  } = usePostPaymentV1PrivateEpayrequestPaywithwallet({
    onSuccess(data, variables) {
      onSuccess?.(data, variables.requestBody);
    },
    onError(error, variables) {
      onErrorPayWithWallet?.(error, variables.requestBody);
    },
  });

  const { chargeAndPay, isLoadingCharge, chargeError } = useChargeAndPay({
    getAfterPayRedirectUri,
    redirectToPayLink,
  });

  const isInSufficientBalance =
    (selectedWallet?.availableRemain ?? 0) -
      (data?.amount ? Number(data.amount) : 0) <
    0;

  const onPay = useCallback(() => {
    if (selectedWallet) {
      if (isInSufficientBalance) {
        if (selectedWallet && data) {
          chargeAndPay({
            chargeAmount: data?.amount,
            clientUniqueId: data?.clientUniqueId as string,
            walletNumber: selectedWallet.number!,
          });
        }
      } else {
        epayRequestTokenPay({
          requestBody: {
            token,
            walletNumber: selectedWallet.number as string,
            description: "",
          },
        });
      }
    }
  }, [
    chargeAndPay,
    data,
    epayRequestTokenPay,
    isInSufficientBalance,
    selectedWallet,
    token,
  ]);

  return {
    onPay,
    resetEPay,
    isPayLoading: isLoadingCharge || epayRequestIsLoading,
    payError: chargeError || error,
    isInSufficientBalance,
  };
};

export { useEpayPay };
