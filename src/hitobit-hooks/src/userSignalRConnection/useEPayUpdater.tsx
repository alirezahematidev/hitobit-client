import {
  EpayRequestActualState,
  EpayRequestInfoResponseVM,
  EpayRequestListResponseVM,
  getPaymentV1PrivateEpayrequestList,
  useGetPaymentV1PublicEpayrequestInfoToken,
} from "hitobit-services";
import { useQueryClient } from "react-query";
import { useUserSignalREvent } from "./useUserSignalREvent";

const useEPayUpdater = () => {
  const client = useQueryClient();

  useUserSignalREvent("epayRequestChangeStatus", (data) => {
    client.setQueryData<EpayRequestInfoResponseVM>(
      useGetPaymentV1PublicEpayrequestInfoToken.info({ token: data.token }).key,
      (prev) => ({
        ...prev,
        amount: data.amount ?? prev?.amount,
        description: data.description ?? prev?.description,
        expireDate: data.expireDate ?? prev?.expireDate,
        payDate: data.payDate ?? prev?.payDate,
        payTo: data.payTo ?? prev?.payTo,
        token: data.token ?? prev?.token,
        assignedToUserId:
          data.assignedToUserId ?? (prev?.assignedToUserId as string),
        status: data.status ?? prev?.status,
        cardNumber: data.cardNumber ?? prev?.cardNumber,
        referenceNumber: data.referenceNumber ?? prev?.referenceNumber,
        voucherId: data.voucherId ?? prev?.voucherId,
        getComissionFromPayer:
          data.getComissionFromPayer ?? prev?.getComissionFromPayer,
        commissionAmount: data.commissionAmount ?? prev?.commissionAmount,
        currencySymbol: data.currencySymbol ?? prev?.currencySymbol,
        createDate: data.createDate ?? prev?.createDate,
        epayRequestCustomDataInfos:
          data.epayRequestCustomDataInfos ?? prev?.epayRequestCustomDataInfos,
        epayRequestGatewayType:
          data.epayRequestGatewayType ?? prev?.epayRequestGatewayType,
        epayRequestType: data.epayRequestType ?? prev?.epayRequestType,
        epayRequestStatus:
          (data.status as unknown as EpayRequestActualState) ?? prev?.status,
        audiences: data.audiences ?? prev?.audiences,
        postActionInfo: prev?.postActionInfo,
        payViaOtherCurrency: data.PayViaOtherCurrency,
        payerCurrencySymbol:
          data.PayerCurrencySymbol ?? prev?.payerCurrencySymbol,
        assignedUserDisplayName:
          data.AssignedUserDisplayName ?? prev?.assignedUserDisplayName,
        clientUniqueId: data.clientUniqueId ?? prev?.clientUniqueId,
        payerDisplayName: data.payerDisplayName ?? prev?.payerDisplayName,
        pluginKey: data.PluginKey ?? prev?.pluginKey,
        // @TODO payerAmount should be added to socket
        payerAmount: 0,
      }),
    );

    client.setQueryData<EpayRequestListResponseVM>(
      getPaymentV1PrivateEpayrequestList.key,
      (prev) => {
        const list = prev?.list ?? [];

        const index = list.findIndex((item) => item.id === data.id);

        if (index >= 0) {
          list[index] = {
            amount: data.amount,
            description: data.description,
            expireDate: data.expireDate,
            payDate: data.payDate,
            createDate: data.createDate,
            epayRequestActualState: data.status,
            epayRequestType: data.epayRequestType,
            id: data.id,
            assignedToUserId: data.assignedToUserId as string,
            assignedUserDisplayName: data.AssignedUserDisplayName,
            audiences: data.audiences,
            customDatas: data.epayRequestCustomDataInfos,
            ownerDisplayName: data.ownerDisplayName,
            payerDisplayName: data.payerDisplayName,
            token: data.token,
          };

          return {
            count: prev?.count || 1,
            list: [...list],
          };
        }

        return {
          ...prev,
          count: prev?.count || 1,
          list: [
            {
              amount: data.amount,
              description: data.description,
              expireDate: data.expireDate,
              payDate: data.payDate,
              createDate: data.createDate,
              epayRequestActualState: data.status,
              epayRequestType: data.epayRequestType,
              id: data.id,
              assignedToUserId: data.assignedToUserId as string,
              assignedUserDisplayName: data.AssignedUserDisplayName,
              audiences: data.audiences,
              customDatas: data.epayRequestCustomDataInfos,
              ownerDisplayName: data.ownerDisplayName,
              payerDisplayName: data.payerDisplayName,
              token: data.token,
            },
            ...(prev?.list ?? []),
          ],
        };
      },
    );
  });
};

export { useEPayUpdater };
