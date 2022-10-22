import { useAuth } from "react-oidc-js";
import { useEvent } from "reactjs-view-core";
import { v4 as uuid } from "uuid";
import {
  EpayPayWithWalletRequestVM,
  RequestError,
  useGetWalletV1PublicFind,
  usePostPaymentV1PrivateEpayrequestPaywithwallet,
  usePostPaymentV1PublicEpayrequestPos,
  UserWalletDisplayResponseVM,
} from "../../services";
import { useChargeAndPay } from "../useChargeAndPay";

export function usePosPay({
  targetWalletNumber,
  selectedWallet,
  amount,
  description,
  onSuccess,
  onErrorPayWithWallet,
  getAfterPayRedirectUri,
  redirectToPayLink,
}: {
  selectedWallet?: UserWalletDisplayResponseVM;
  targetWalletNumber?: string;
  amount: string;
  description: string;
  onSuccess?: (data: any, variables: EpayPayWithWalletRequestVM) => void;
  onErrorPayWithWallet?: (
    error: RequestError | Error,
    variables: EpayPayWithWalletRequestVM,
  ) => void;
  getAfterPayRedirectUri: (clientUniqueId: string) => string;
  redirectToPayLink: (paymentLink: string) => string;
}) {
  const { userData } = useAuth();
  const {
    data,
    isLoading: targetIsLoading,
    error,
    refetch: refetchTarget,
    remove,
  } = useGetWalletV1PublicFind(
    { walletNumber: targetWalletNumber },
    {
      enabled: !!targetWalletNumber,
    },
  );

  const isInSufficientBalance =
    (selectedWallet?.availableRemain ?? 0) - (amount ? Number(amount) : 0) < 0;

  const {
    mutate: postPosPay,
    isLoading: postPosPayIsLoading,
    error: apiError,
    reset: resetWalletPay,
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

  const {
    mutate: createPos,
    isLoading,
    error: posError,
    reset: resetPosEpay,
  } = usePostPaymentV1PublicEpayrequestPos({
    onSuccess(data, variables) {
      if (!userData?.access_token) {
        if (data.paymentLink) {
          redirectToPayLink(data.paymentLink);
        }
        return;
      }

      if (selectedWallet) {
        if (isInSufficientBalance) {
          if (data) {
            chargeAndPay({
              chargeAmount:
                variables.requestBody.amount - selectedWallet.availableRemain,
              clientUniqueId: variables.requestBody.clientUniqueId as string,
              walletNumber: selectedWallet.number!,
            });
          }
        } else {
          postPosPay({
            requestBody: {
              token: data.token,
              description,
              walletNumber: selectedWallet.number!,
            },
          });
        }
      }
    },
  });

  const onPay = () => {
    const clientUniqueId = uuid();
    createPos({
      requestBody: {
        userWalletNumber: targetWalletNumber,
        amount: Number(amount),
        description: description,
        redirectType: "Redirect",
        clientUniqueId,
        redirectUrl: getAfterPayRedirectUri(clientUniqueId),
        getCommissionFromPayer: true,
      },
    });
  };

  const resetPos = useEvent(() => {
    resetPosEpay();
    resetWalletPay();
    remove();
  });

  return {
    targetWallet: data,
    targetIsLoading,
    targetError: error,
    refetchTarget,
    onPay,
    isInSufficientBalance,
    isPayLoading: isLoading || isLoadingCharge || postPosPayIsLoading,
    payError: posError || chargeError || apiError,
    resetPos,
  };
}
