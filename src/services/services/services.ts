/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { SwaggerResponse } from "./config";
import { Http } from "./httpRequest";
import {
  AddPostActionInternalDepositEPayRequestRequestVM,
  AddPostActionPlaceMarketBuyOrderRequestVM,
  AddPostActionResponseVM,
  AddressBookAddRequestVM,
  AddressBookResponseVM,
  AggregationResultResponseVM,
  ApiKeyAddRequestVM,
  ApiKeyAddResponseVM,
  ApiKeyListResponseVM,
  ApiKeyResponseVM,
  ApiKeyUpdateRequestVM,
  ApiScopeResponseVM,
  BanksResponseVM,
  BlockchainAddressResponseVM,
  CancelAllOrdersRequestVM,
  CancelOcoOrderRequestVM,
  CancelOcoOrderResponseVM,
  CancelOrderRequestVM,
  CancelOrderResponseVM,
  ChangeEmailRequestVM,
  ChangePasswordRequestVM,
  ChangeTwoFactorRequestVM,
  CityResponseVM,
  CountryResponseVM,
  CreateChargeRequestRequestVM,
  CreateDivideIpgRequestRequestVM,
  CreateDivideLinkRequestRequestVM,
  CreateIpgRequestRequestVM,
  CreateLinkRequestRequestVM,
  CreatePosRequestRequestVM,
  CreateSettlementRequestVM,
  CreateUserBankDetailRequestVM,
  CreateUserBankRequestVM,
  CreateUserWalletRequestVM,
  CreateWithdrawRequestUserWalletResponseVM,
  CurrencyResponseVM,
  DeleteAuthV1PrivateApikeyQueryParams,
  DeleteAuthV1PrivateUsertrusteddeviceQueryParams,
  DeleteEngagementV1PrivateNotificationClearallQueryParams,
  DepositTransactionHistoryListResponseVM,
  DomainCurrencyResponseVM,
  DomainSettingVM,
  DomainTraderLevelResponseVM,
  EpayPayWithWalletRequestVM,
  EpayRequestCountResponseVM,
  EpayRequestInfoResponseVM,
  EpayRequestListResponseVM,
  EPayRequestReceiptInfoResponseVM,
  EpayRequestResponseVM,
  FindUserWalletResponseVM,
  ForgotPasswordRequestVM,
  GetAnalyticsV1PrivateResellercommissionhistoryActiveusercountQueryParams,
  GetAnalyticsV1PrivateResellercommissionhistoryNewusercountQueryParams,
  GetAnalyticsV1PrivateResellercommissionhistoryTotalincomeQueryParams,
  GetAnalyticsV1PrivateResellercommissionhistoryTransactioncountQueryParams,
  GetAnalyticsV1PrivateSecurityactivityListQueryParams,
  GetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateListQueryParams,
  GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistoryQueryParams,
  GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackListQueryParams,
  GetAnalyticsV1PrivateUserloginhistoryListQueryParams,
  GetAuthV1PrivateApikeyListQueryParams,
  GetAuthV1PrivateApikeyQueryParams,
  GetAuthV1PrivateUsertrusteddeviceListQueryParams,
  GetAuthV1PrivateUsertrusteddeviceLoginhistoryListQueryParams,
  GetAuthV1PublicAuthIsphonenumberregisteredQueryParams,
  GetBaseinfoV1PublicCityListQueryParams,
  GetBaseinfoV1PublicCountryAllQueryParams,
  GetBaseinfoV1PublicProvinceListQueryParams,
  GetCapitalV1PrivateDepositListQueryParams,
  GetCapitalV1PrivatePosListQueryParams,
  GetCapitalV1PrivateSettlementListQueryParams,
  GetCapitalV1PrivateWithdrawDetailQueryParams,
  GetCapitalV1PrivateWithdrawListQueryParams,
  GetCapitalV1ProtectedWithdrawInfoQueryParams,
  GetEngagementV1PrivateNotificationQueryParams,
  GetExchangeV1PrivateAllorderlistQueryParams,
  GetExchangeV1PrivateAllordersQueryParams,
  GetExchangeV1PrivateAlltradesQueryParams,
  GetExchangeV1PrivateOpenocoorderlistQueryParams,
  GetExchangeV1PrivateOpenordersQueryParams,
  GetExchangeV1PrivateOrderlistQueryParams,
  GetExchangeV1PrivateOrderQueryParams,
  GetExchangeV1PublicDepthQueryParams,
  GetExchangeV1PublicKlinesQueryParams,
  GetExchangeV1PublicMarketsQueryParams,
  GetExchangeV1PublicTicker24hrQueryParams,
  GetExchangeV1PublicTradesQueryParams,
  GetOcoOrderResponseVM,
  GetPartyV1PrivateFavoritemarketQueryParams,
  GetPartyV1PrivateNotificationAllQueryParams,
  GetPartyV1PrivatePluginListQueryParams,
  GetPartyV1PrivateUserByuserreferralprogramidQueryParams,
  GetPartyV1PublicPluginQueryParams,
  GetPaymentV1PrivateEpayrequestCommissionQueryParams,
  GetPaymentV1PrivateEpayrequestCountFrommeQueryParams,
  GetPaymentV1PrivateEpayrequestCountQueryParams,
  GetPaymentV1PrivateEpayrequestInfoClientuniqueidQueryParams,
  GetPaymentV1PrivateEpayrequestListFrommeQueryParams,
  GetPaymentV1PrivateEpayrequestListQueryParams,
  GetPaymentV1PrivateEpayrequestPluginCountQueryParams,
  GetPaymentV1PublicEpayrequestGetblockchainaddressQueryParams,
  GetPaymentV1PublicEpayrequestInfoTokenQueryParams,
  GetPaymentV1PublicEpayrequestReceiptinfoClientuniqueidQueryParams,
  GetPaymentV1PublicEpayrequestReceiptinfoTokenQueryParams,
  GetSettlementV1PrivateAddressbookQueryParams,
  GetSettlementV1PrivateCommissionQueryParams,
  GetSettlementV1PrivateCountQueryParams,
  GetSettlementV1PrivateListQueryParams,
  GetSettlementV1PrivateQueryParams,
  GetSettlementV1PrivateReportQueryParams,
  GetSettlementV1PrivateSubuserQueryParams,
  GetStorageV1PrivateFileDownloadQueryParams,
  GetWalletV1PrivateGrouptransferCommissionQueryParams,
  GetWalletV1PrivateInternalwithdrawInfoQueryParams,
  GetWalletV1PrivateQueryParams,
  GetWalletV1PrivateSubuserAllQueryParams,
  GetWalletV1PrivateSubuserAssignableQueryParams,
  GetWalletV1PrivateTransferCommissionQueryParams,
  GetWalletV1PrivateUserassetSpotDefaultQueryParams,
  GetWalletV1PrivateUserbankStatusQueryParams,
  GetWalletV1PublicFindQueryParams,
  GetWithdrawRequestUserWalletItemResponseVM,
  GlobalWalletProviderResponseVM,
  GroupTransferMoneyRequestVM,
  GroupTransferResponseVM,
  IdentificationLevelGuideResponseVM,
  IdentityStatus,
  InternalWithdrawResponseVM,
  KlineDataResponseVM,
  LoginModelRequestVM,
  MarketResponseVM,
  MarketTickerPriceResponseVM,
  MoneyNetworkResponseVM,
  NewEmailRequestVM,
  Notification2ListResponseVM,
  NotificationCountByTypeResponseVM,
  NotificationListResponseVM,
  NotificationTypesReadCountResponseVM,
  OcoOrderResultInfoResponseVM,
  OrderAckInfoResponseVM,
  OrderBookResponseVM,
  OrderFullInfoResponseVM,
  OrderResultInfoListResponseVM,
  OrderResultInfoResponseVM,
  PayerCurrencyRequestVM,
  PermissionRequestVM,
  PlaceOcoOrderRequestVM,
  PlaceOrderRequestVM,
  PlatformType,
  PluginInfoResponseVM,
  PostAuthV1PrivateAuthEmailSendcodeQueryParams,
  PostAuthV1PrivateAuthPhonecallSendcodeQueryParams,
  PostAuthV1PublicAuthChecktwofactorisenableQueryParams,
  PostAuthV1PublicAuthGetcodeQueryParams,
  PostPaymentV1PrivateEpayrequestUnblockQueryParams,
  PostPaymentV1PublicEpayrequestSmsResendQueryParams,
  POSTransactionHistoryListResponseVM,
  PreferenceUserSettingRequestVM,
  ProvinceResponseVM,
  PurposeType,
  PutEngagementV1PrivateNotificationReadallQueryParams,
  PutPaymentV1PublicEpayrequestCancelQueryParams,
  PutWalletV1PrivateUserreferralprogramDefaultQueryParams,
  PuzzleModelResponseVM,
  PuzzleSubmissionRequestVM,
  QrCodeResponseVM,
  RecentTradeResponseVM,
  RegisterRequestVM,
  RegisterResponseVM,
  RemoveEmailRequestVM,
  ReportResultResponseVM,
  RevokeTokenRequestVM,
  SecurityActivityListVM,
  SettlementExcelResponseVM,
  SettlementFilterRequestVM,
  SettlementRequestInfoListResponseVM,
  SettlementRequestInfoResponseVM,
  SettlementTransactionHistoryListResponseVM,
  SubuserAccessRequestVM,
  TodayTotalWithdrawResponseVM,
  TokenResponseVM,
  TradeReferralCommissionHistoryListResponseVM,
  TradeReferralCommissionHistoryResponseVM,
  TradeReferralCommissionRankingResponseVM,
  TradeReferralHistoryListResponseVM,
  TradeResposneListVM,
  TransactionHistoryDetailResponseVM,
  TransferMoneyRequestVM,
  TransferMoneyResponseVM,
  UpdateEpayRequestAssignedUserRequestVM,
  UpdateEpayRequestCustomDataRequestVM,
  UpdateFavoriteMarketRequestVM,
  UpdateUserWalletRequestVM,
  UserAssetResponseVM,
  UserBankResponseVM,
  UserBasicInfoRequestVM,
  UserCurrencyResponseVM,
  UserDepositAddressRequestVM,
  UserDepositAddressResponseVM,
  UserExistResponseVM,
  UserIdentificationLevelOneRequestVM,
  UserIdentificationLevelThreeRequestVM,
  UserIdentificationLevelTwoRequestVM,
  UserInfoVM,
  UserLoginHistoryDetailsVM,
  UserLoginHistoryListVM,
  UserMinimalResponseVM,
  UserPluginResponseVM,
  UserPluginTogggleRequestVM,
  UserReferralInfoVM,
  UserReferralProgramAddVM,
  UserReferralProgramVM,
  UserSettingPreferenseResponseVM,
  UserStatusResponseVM,
  UserTraderLevelResponseVM,
  UserTrustDeviceResponseVM,
  UserTrustedDeviceListResponseVM,
  UserWalletDisplayDetailResponseVM,
  UserWalletDisplayResponseVM,
  UserWalletResponseVM,
  VerifySecureRequestVM,
  VerifyUserPhoneNumberRequestVM,
  WalletDepositAddressRequestVM,
  WithdrawRequestUserWalletCreateRequestVM,
  WithdrawTransactionHistoryListResponseVM,
} from "./types";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const __DEV__ = process.env.NODE_ENV !== "production";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function overrideConfig(
  config?: AxiosRequestConfig,
  configOverride?: AxiosRequestConfig,
): AxiosRequestConfig {
  return {
    ...config,
    ...configOverride,
    headers: {
      ...config?.headers,
      ...configOverride?.headers,
    },
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function template(path: string, obj: { [x: string]: any } = {}) {
  Object.keys(obj).forEach((key) => {
    const re = new RegExp(`{${key}}`, "i");
    path = path.replace(re, obj[key]);
  });

  return path;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function objToForm(requestBody: object) {
  const formData = new FormData();

  Object.entries(requestBody).forEach(([key, value]) => {
    value && formData.append(key, value);
  });

  return formData;
}

export const deleteAuthV1PrivateApikey = (
  queryParams?: DeleteAuthV1PrivateApikeyQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteAuthV1PrivateApikey.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteAuthV1PrivateApikey.key = "/auth/v1/private/apikey";

export const deleteAuthV1PrivateApikeyAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteAuthV1PrivateApikeyAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteAuthV1PrivateApikeyAll.key = "/auth/v1/private/apikey/all";

export const deleteAuthV1PrivateAuthEmail = (
  requestBody: RemoveEmailRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteAuthV1PrivateAuthEmail.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteAuthV1PrivateAuthEmail.key = "/auth/v1/private/auth/email";

export const deleteAuthV1PrivateUsertrusteddevice = (
  queryParams?: DeleteAuthV1PrivateUsertrusteddeviceQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteAuthV1PrivateUsertrusteddevice.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteAuthV1PrivateUsertrusteddevice.key = "/auth/v1/private/usertrusteddevice";

export const deleteEngagementV1PrivateNotificationClearall = (
  queryParams?: DeleteEngagementV1PrivateNotificationClearallQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteEngagementV1PrivateNotificationClearall.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteEngagementV1PrivateNotificationClearall.key =
  "/engagement/v1/private/notification/clearall";

export const deleteExchangeV1PrivateOpenorders = (
  requestBody: CancelAllOrdersRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CancelOrderResponseVM[]>> => {
  return Http.deleteRequest(
    deleteExchangeV1PrivateOpenorders.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
deleteExchangeV1PrivateOpenorders.key = "/exchange/v1/private/openorders";

export const deleteExchangeV1PrivateOrder = (
  requestBody: CancelOrderRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CancelOrderResponseVM>> => {
  return Http.deleteRequest(
    deleteExchangeV1PrivateOrder.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
deleteExchangeV1PrivateOrder.key = "/exchange/v1/private/order";

export const deleteExchangeV1PrivateOrderlist = (
  requestBody: CancelOcoOrderRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CancelOcoOrderResponseVM>> => {
  return Http.deleteRequest(
    deleteExchangeV1PrivateOrderlist.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
deleteExchangeV1PrivateOrderlist.key = "/exchange/v1/private/orderlist";

export const deletePartyV1PrivateFavoritemarket = (
  requestBody: UpdateFavoriteMarketRequestVM[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deletePartyV1PrivateFavoritemarket.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deletePartyV1PrivateFavoritemarket.key = "/party/v1/private/favoritemarket";

export const deletePartyV1PrivateNotification = (
  requestBody: number[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deletePartyV1PrivateNotification.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deletePartyV1PrivateNotification.key = "/party/v1/private/notification";

export const deletePartyV1PrivateNotificationAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deletePartyV1PrivateNotificationAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deletePartyV1PrivateNotificationAll.key = "/party/v1/private/notification/all";

export const deleteSettlementV1PrivateAddressbook = (
  requestBody: number[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteSettlementV1PrivateAddressbook.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteSettlementV1PrivateAddressbook.key = "/settlement/v1/private/addressbook";

export const deleteWalletV1PrivateWalletpermission = (
  requestBody: SubuserAccessRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.deleteRequest(
    deleteWalletV1PrivateWalletpermission.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
deleteWalletV1PrivateWalletpermission.key =
  "/wallet/v1/private/walletpermission";

export const getAnalyticsV1PrivateResellercommissionhistoryActiveusercount = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryActiveusercountQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateResellercommissionhistoryActiveusercount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateResellercommissionhistoryActiveusercount.key =
  "/analytics/v1/private/resellercommissionhistory/activeusercount";

export const getAnalyticsV1PrivateResellercommissionhistoryNewusercount = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryNewusercountQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateResellercommissionhistoryNewusercount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateResellercommissionhistoryNewusercount.key =
  "/analytics/v1/private/resellercommissionhistory/newusercount";

export const getAnalyticsV1PrivateResellercommissionhistoryTotalincome = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTotalincomeQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateResellercommissionhistoryTotalincome.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateResellercommissionhistoryTotalincome.key =
  "/analytics/v1/private/resellercommissionhistory/totalincome";

export const getAnalyticsV1PrivateResellercommissionhistoryTransactioncount = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTransactioncountQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateResellercommissionhistoryTransactioncount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateResellercommissionhistoryTransactioncount.key =
  "/analytics/v1/private/resellercommissionhistory/transactioncount";

export const getAnalyticsV1PrivateSecurityactivityList = (
  queryParams?: GetAnalyticsV1PrivateSecurityactivityListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SecurityActivityListVM>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateSecurityactivityList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateSecurityactivityList.key =
  "/analytics/v1/private/securityactivity/list";

export const getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateListQueryParams,
    configOverride?: AxiosRequestConfig,
  ): Promise<SwaggerResponse<TradeReferralCommissionHistoryListResponseVM>> => {
    return Http.getRequest(
      getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.key,
      queryParams,
      undefined,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.key =
  "/analytics/v1/private/tradereferralcommissionhistory/commissionrebate/list";

export const getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent =
  (
    configOverride?: AxiosRequestConfig,
  ): Promise<SwaggerResponse<TradeReferralCommissionHistoryResponseVM[]>> => {
    return Http.getRequest(
      getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.key,
      undefined,
      undefined,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.key =
  "/analytics/v1/private/tradereferralcommissionhistory/commissionrebate/recent";

export const getAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistoryQueryParams,
    configOverride?: AxiosRequestConfig,
  ): Promise<SwaggerResponse<TradeReferralHistoryListResponseVM>> => {
    return Http.getRequest(
      getAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.key,
      queryParams,
      undefined,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
getAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.key =
  "/analytics/v1/private/tradereferralcommissionhistory/referralhistory";

export const getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackListQueryParams,
    configOverride?: AxiosRequestConfig,
  ): Promise<SwaggerResponse<TradeReferralCommissionHistoryListResponseVM>> => {
    return Http.getRequest(
      getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.key,
      queryParams,
      undefined,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.key =
  "/analytics/v1/private/tradereferralcommissionhistory/referralkickback/list";

export const getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent =
  (
    configOverride?: AxiosRequestConfig,
  ): Promise<SwaggerResponse<TradeReferralCommissionHistoryResponseVM[]>> => {
    return Http.getRequest(
      getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.key,
      undefined,
      undefined,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.key =
  "/analytics/v1/private/tradereferralcommissionhistory/referralkickback/recent";

export const getAnalyticsV1PrivateUserloginhistoryLast = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserLoginHistoryDetailsVM>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateUserloginhistoryLast.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateUserloginhistoryLast.key =
  "/analytics/v1/private/userloginhistory/last";

export const getAnalyticsV1PrivateUserloginhistoryList = (
  queryParams?: GetAnalyticsV1PrivateUserloginhistoryListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserLoginHistoryListVM>> => {
  return Http.getRequest(
    getAnalyticsV1PrivateUserloginhistoryList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PrivateUserloginhistoryList.key =
  "/analytics/v1/private/userloginhistory/list";

export const getAnalyticsV1PublicTradereferralcommissionhistoryRank = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<TradeReferralCommissionRankingResponseVM[]>> => {
  return Http.getRequest(
    getAnalyticsV1PublicTradereferralcommissionhistoryRank.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAnalyticsV1PublicTradereferralcommissionhistoryRank.key =
  "/analytics/v1/public/tradereferralcommissionhistory/rank";

export const getAuthV1PrivateApikey = (
  queryParams?: GetAuthV1PrivateApikeyQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ApiKeyResponseVM>> => {
  return Http.getRequest(
    getAuthV1PrivateApikey.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateApikey.key = "/auth/v1/private/apikey";

export const getAuthV1PrivateApikeyList = (
  queryParams?: GetAuthV1PrivateApikeyListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ApiKeyListResponseVM>> => {
  return Http.getRequest(
    getAuthV1PrivateApikeyList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateApikeyList.key = "/auth/v1/private/apikey/list";

export const getAuthV1PrivateAuthGetqrcode = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<QrCodeResponseVM>> => {
  return Http.getRequest(
    getAuthV1PrivateAuthGetqrcode.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateAuthGetqrcode.key = "/auth/v1/private/auth/getqrcode";

export const getAuthV1PrivateAuthUserstatus = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserStatusResponseVM>> => {
  return Http.getRequest(
    getAuthV1PrivateAuthUserstatus.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateAuthUserstatus.key = "/auth/v1/private/auth/userstatus";

export const getAuthV1PrivateIdentityresourceGetpropertylist = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string[]>> => {
  return Http.getRequest(
    getAuthV1PrivateIdentityresourceGetpropertylist.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateIdentityresourceGetpropertylist.key =
  "/auth/v1/private/identityresource/getpropertylist";

export const getAuthV1PrivateIdentityresourceGetscopelist = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ApiScopeResponseVM[]>> => {
  return Http.getRequest(
    getAuthV1PrivateIdentityresourceGetscopelist.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateIdentityresourceGetscopelist.key =
  "/auth/v1/private/identityresource/getscopelist";

export const getAuthV1PrivateUsertrusteddeviceList = (
  queryParams?: GetAuthV1PrivateUsertrusteddeviceListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserTrustedDeviceListResponseVM>> => {
  return Http.getRequest(
    getAuthV1PrivateUsertrusteddeviceList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateUsertrusteddeviceList.key =
  "/auth/v1/private/usertrusteddevice/list";

export const getAuthV1PrivateUsertrusteddeviceLoginhistoryList = (
  queryParams?: GetAuthV1PrivateUsertrusteddeviceLoginhistoryListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserLoginHistoryListVM>> => {
  return Http.getRequest(
    getAuthV1PrivateUsertrusteddeviceLoginhistoryList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PrivateUsertrusteddeviceLoginhistoryList.key =
  "/auth/v1/private/usertrusteddevice/loginhistory/list";

export const getAuthV1PublicAuthIsphonenumberregistered = (
  queryParams?: GetAuthV1PublicAuthIsphonenumberregisteredQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<boolean>> => {
  return Http.getRequest(
    getAuthV1PublicAuthIsphonenumberregistered.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getAuthV1PublicAuthIsphonenumberregistered.key =
  "/auth/v1/public/auth/isphonenumberregistered";

export const getBaseinfoV1PublicCityList = (
  queryParams?: GetBaseinfoV1PublicCityListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CityResponseVM[]>> => {
  return Http.getRequest(
    getBaseinfoV1PublicCityList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getBaseinfoV1PublicCityList.key = "/baseinfo/v1/public/city/list";

export const getBaseinfoV1PublicCountryAll = (
  queryParams?: GetBaseinfoV1PublicCountryAllQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CountryResponseVM[]>> => {
  return Http.getRequest(
    getBaseinfoV1PublicCountryAll.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getBaseinfoV1PublicCountryAll.key = "/baseinfo/v1/public/country/all";

export const getBaseinfoV1PublicProvinceList = (
  queryParams?: GetBaseinfoV1PublicProvinceListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ProvinceResponseVM[]>> => {
  return Http.getRequest(
    getBaseinfoV1PublicProvinceList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getBaseinfoV1PublicProvinceList.key = "/baseinfo/v1/public/province/list";

export const getCapitalV1PrivateDepositList = (
  queryParams?: GetCapitalV1PrivateDepositListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<DepositTransactionHistoryListResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateDepositList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateDepositList.key = "/capital/v1/private/deposit/list";

export const getCapitalV1PrivateDepositRecent = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<DepositTransactionHistoryListResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateDepositRecent.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateDepositRecent.key = "/capital/v1/private/deposit/recent";

export const getCapitalV1PrivatePosList = (
  queryParams?: GetCapitalV1PrivatePosListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<POSTransactionHistoryListResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivatePosList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivatePosList.key = "/capital/v1/private/pos/list";

export const getCapitalV1PrivateSettlementList = (
  queryParams?: GetCapitalV1PrivateSettlementListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SettlementTransactionHistoryListResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateSettlementList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateSettlementList.key = "/capital/v1/private/settlement/list";

export const getCapitalV1PrivateWithdrawDetail = (
  queryParams?: GetCapitalV1PrivateWithdrawDetailQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<TransactionHistoryDetailResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateWithdrawDetail.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateWithdrawDetail.key = "/capital/v1/private/withdraw/detail";

export const getCapitalV1PrivateWithdrawList = (
  queryParams?: GetCapitalV1PrivateWithdrawListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<WithdrawTransactionHistoryListResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateWithdrawList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateWithdrawList.key = "/capital/v1/private/withdraw/list";

export const getCapitalV1PrivateWithdrawRecent = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<WithdrawTransactionHistoryListResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateWithdrawRecent.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateWithdrawRecent.key = "/capital/v1/private/withdraw/recent";

export const getCapitalV1PrivateWithdrawTodaytotal = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<TodayTotalWithdrawResponseVM>> => {
  return Http.getRequest(
    getCapitalV1PrivateWithdrawTodaytotal.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PrivateWithdrawTodaytotal.key =
  "/capital/v1/private/withdraw/todaytotal";

export const getCapitalV1ProtectedWithdrawInfo = (
  queryParams?: GetCapitalV1ProtectedWithdrawInfoQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<GetWithdrawRequestUserWalletItemResponseVM>> => {
  return Http.getRequest(
    getCapitalV1ProtectedWithdrawInfo.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1ProtectedWithdrawInfo.key = "/capital/v1/protected/withdraw/info";

export const getCapitalV1PublicCurrencyAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CurrencyResponseVM[]>> => {
  return Http.getRequest(
    getCapitalV1PublicCurrencyAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PublicCurrencyAll.key = "/capital/v1/public/currency/all";

export const getCapitalV1PublicMoneynetworkAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<MoneyNetworkResponseVM[]>> => {
  return Http.getRequest(
    getCapitalV1PublicMoneynetworkAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getCapitalV1PublicMoneynetworkAll.key = "/capital/v1/public/moneynetwork/all";

export const getEngagementV1PrivateNotification = (
  queryParams?: GetEngagementV1PrivateNotificationQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<Notification2ListResponseVM>> => {
  return Http.getRequest(
    getEngagementV1PrivateNotification.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getEngagementV1PrivateNotification.key = "/engagement/v1/private/notification";

export const getEngagementV1PrivateNotificationType = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<NotificationCountByTypeResponseVM[]>> => {
  return Http.getRequest(
    getEngagementV1PrivateNotificationType.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getEngagementV1PrivateNotificationType.key =
  "/engagement/v1/private/notification/type";

export const getExchangeV1PrivateAllorderlist = (
  queryParams?: GetExchangeV1PrivateAllorderlistQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OcoOrderResultInfoResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PrivateAllorderlist.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateAllorderlist.key = "/exchange/v1/private/allorderlist";

export const getExchangeV1PrivateAllorders = (
  queryParams?: GetExchangeV1PrivateAllordersQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OrderResultInfoListResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PrivateAllorders.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateAllorders.key = "/exchange/v1/private/allorders";

export const getExchangeV1PrivateAlltrades = (
  queryParams?: GetExchangeV1PrivateAlltradesQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<TradeResposneListVM>> => {
  return Http.getRequest(
    getExchangeV1PrivateAlltrades.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateAlltrades.key = "/exchange/v1/private/alltrades";

export const getExchangeV1PrivateOpenocoorderlist = (
  queryParams?: GetExchangeV1PrivateOpenocoorderlistQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OcoOrderResultInfoResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PrivateOpenocoorderlist.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateOpenocoorderlist.key =
  "/exchange/v1/private/openocoorderlist";

export const getExchangeV1PrivateOpenorders = (
  queryParams?: GetExchangeV1PrivateOpenordersQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OrderResultInfoResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PrivateOpenorders.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateOpenorders.key = "/exchange/v1/private/openorders";

export const getExchangeV1PrivateOrder = (
  queryParams?: GetExchangeV1PrivateOrderQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OrderFullInfoResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PrivateOrder.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateOrder.key = "/exchange/v1/private/order";

export const getExchangeV1PrivateOrderlist = (
  queryParams?: GetExchangeV1PrivateOrderlistQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<GetOcoOrderResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PrivateOrderlist.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateOrderlist.key = "/exchange/v1/private/orderlist";

export const getExchangeV1PrivateUsertraderlevel = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserTraderLevelResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PrivateUsertraderlevel.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PrivateUsertraderlevel.key =
  "/exchange/v1/private/usertraderlevel";

export const getExchangeV1PublicAlltickers24hr = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<MarketTickerPriceResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PublicAlltickers24hr.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicAlltickers24hr.key = "/exchange/v1/public/alltickers/24hr";

export const getExchangeV1PublicDepth = (
  queryParams?: GetExchangeV1PublicDepthQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OrderBookResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PublicDepth.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicDepth.key = "/exchange/v1/public/depth";

export const getExchangeV1PublicDomaintraderlevels = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<DomainTraderLevelResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PublicDomaintraderlevels.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicDomaintraderlevels.key =
  "/exchange/v1/public/domaintraderlevels";

export const getExchangeV1PublicKlines = (
  queryParams?: GetExchangeV1PublicKlinesQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<KlineDataResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PublicKlines.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicKlines.key = "/exchange/v1/public/klines";

export const getExchangeV1PublicMarkets = (
  queryParams?: GetExchangeV1PublicMarketsQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<MarketResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PublicMarkets.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicMarkets.key = "/exchange/v1/public/markets";

export const getExchangeV1PublicTicker24hr = (
  queryParams?: GetExchangeV1PublicTicker24hrQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<MarketTickerPriceResponseVM>> => {
  return Http.getRequest(
    getExchangeV1PublicTicker24hr.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicTicker24hr.key = "/exchange/v1/public/ticker/24hr";

export const getExchangeV1PublicTrades = (
  queryParams?: GetExchangeV1PublicTradesQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<RecentTradeResponseVM[]>> => {
  return Http.getRequest(
    getExchangeV1PublicTrades.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getExchangeV1PublicTrades.key = "/exchange/v1/public/trades";

export const getPartyV1PrivateDeviceAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserTrustDeviceResponseVM[]>> => {
  return Http.getRequest(
    getPartyV1PrivateDeviceAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateDeviceAll.key = "/party/v1/private/device/all";

export const getPartyV1PrivateDomainForcetwofa = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<boolean>> => {
  return Http.getRequest(
    getPartyV1PrivateDomainForcetwofa.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateDomainForcetwofa.key = "/party/v1/private/domain/forcetwofa";

export const getPartyV1PrivateDomainMultiwallet = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<boolean>> => {
  return Http.getRequest(
    getPartyV1PrivateDomainMultiwallet.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateDomainMultiwallet.key = "/party/v1/private/domain/multiwallet";

export const getPartyV1PrivateDomainSetting = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<DomainSettingVM>> => {
  return Http.getRequest(
    getPartyV1PrivateDomainSetting.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateDomainSetting.key = "/party/v1/private/domain/setting";

export const getPartyV1PrivateFavoritemarket = (
  queryParams?: GetPartyV1PrivateFavoritemarketQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string[]>> => {
  return Http.getRequest(
    getPartyV1PrivateFavoritemarket.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateFavoritemarket.key = "/party/v1/private/favoritemarket";

export const getPartyV1PrivateIdentificationlevelUserInfo = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserInfoVM>> => {
  return Http.getRequest(
    getPartyV1PrivateIdentificationlevelUserInfo.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateIdentificationlevelUserInfo.key =
  "/party/v1/private/identificationlevel/user/info";

export const getPartyV1PrivateNotificationAll = (
  queryParams?: GetPartyV1PrivateNotificationAllQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<NotificationListResponseVM>> => {
  return Http.getRequest(
    getPartyV1PrivateNotificationAll.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateNotificationAll.key = "/party/v1/private/notification/all";

export const getPartyV1PrivateNotificationTypes = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<NotificationTypesReadCountResponseVM[]>> => {
  return Http.getRequest(
    getPartyV1PrivateNotificationTypes.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateNotificationTypes.key = "/party/v1/private/notification/types";

export const getPartyV1PrivatePluginList = (
  queryParams?: GetPartyV1PrivatePluginListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserPluginResponseVM[]>> => {
  return Http.getRequest(
    getPartyV1PrivatePluginList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivatePluginList.key = "/party/v1/private/plugin/list";

export const getPartyV1PrivateUserByuserreferralprogramid = (
  queryParams?: GetPartyV1PrivateUserByuserreferralprogramidQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserReferralInfoVM[]>> => {
  return Http.getRequest(
    getPartyV1PrivateUserByuserreferralprogramid.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateUserByuserreferralprogramid.key =
  "/party/v1/private/user/byuserreferralprogramid";

export const getPartyV1PrivateUsersettingPreference = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserSettingPreferenseResponseVM>> => {
  return Http.getRequest(
    getPartyV1PrivateUsersettingPreference.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateUsersettingPreference.key =
  "/party/v1/private/usersetting/preference";

export const getPartyV1PrivateWalletsettingMaxreferalprogrampercent = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getPartyV1PrivateWalletsettingMaxreferalprogrampercent.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PrivateWalletsettingMaxreferalprogrampercent.key =
  "/party/v1/private/walletsetting/maxreferalprogrampercent";

export const getPartyV1PublicIdentificationlevelGuide = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<IdentificationLevelGuideResponseVM[]>> => {
  return Http.getRequest(
    getPartyV1PublicIdentificationlevelGuide.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PublicIdentificationlevelGuide.key =
  "/party/v1/public/identificationlevel/guide";

export const getPartyV1PublicPlugin = (
  queryParams?: GetPartyV1PublicPluginQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<PluginInfoResponseVM>> => {
  return Http.getRequest(
    getPartyV1PublicPlugin.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPartyV1PublicPlugin.key = "/party/v1/public/plugin";

export const getPaymentV1PrivateEpayrequestCommission = (
  queryParams?: GetPaymentV1PrivateEpayrequestCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestCommission.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestCommission.key =
  "/payment/v1/private/epayrequest/commission";

export const getPaymentV1PrivateEpayrequestCount = (
  queryParams?: GetPaymentV1PrivateEpayrequestCountQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestCountResponseVM[]>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestCount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestCount.key =
  "/payment/v1/private/epayrequest/count";

export const getPaymentV1PrivateEpayrequestCountFromme = (
  queryParams?: GetPaymentV1PrivateEpayrequestCountFrommeQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestCountResponseVM[]>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestCountFromme.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestCountFromme.key =
  "/payment/v1/private/epayrequest/count/fromme";

export const getPaymentV1PrivateEpayrequestInfoClientuniqueid = (
  queryParams?: GetPaymentV1PrivateEpayrequestInfoClientuniqueidQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestInfoResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestInfoClientuniqueid.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestInfoClientuniqueid.key =
  "/payment/v1/private/epayrequest/info/clientuniqueid";

export const getPaymentV1PrivateEpayrequestList = (
  queryParams?: GetPaymentV1PrivateEpayrequestListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestListResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestList.key = "/payment/v1/private/epayrequest/list";

export const getPaymentV1PrivateEpayrequestListFromme = (
  queryParams?: GetPaymentV1PrivateEpayrequestListFrommeQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestListResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestListFromme.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestListFromme.key =
  "/payment/v1/private/epayrequest/list/fromme";

export const getPaymentV1PrivateEpayrequestPluginCount = (
  queryParams?: GetPaymentV1PrivateEpayrequestPluginCountQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getPaymentV1PrivateEpayrequestPluginCount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PrivateEpayrequestPluginCount.key =
  "/payment/v1/private/epayrequest/plugin/count";

export const getPaymentV1PublicEpayrequestGetblockchainaddress = (
  queryParams?: GetPaymentV1PublicEpayrequestGetblockchainaddressQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<BlockchainAddressResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PublicEpayrequestGetblockchainaddress.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PublicEpayrequestGetblockchainaddress.key =
  "/payment/v1/public/epayrequest/getblockchainaddress";

export const getPaymentV1PublicEpayrequestInfoToken = (
  queryParams?: GetPaymentV1PublicEpayrequestInfoTokenQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestInfoResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PublicEpayrequestInfoToken.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PublicEpayrequestInfoToken.key =
  "/payment/v1/public/epayrequest/info/token";

export const getPaymentV1PublicEpayrequestReceiptinfoClientuniqueid = (
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoClientuniqueidQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EPayRequestReceiptInfoResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.key =
  "/payment/v1/public/epayrequest/receiptinfo/clientuniqueid";

export const getPaymentV1PublicEpayrequestReceiptinfoToken = (
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoTokenQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EPayRequestReceiptInfoResponseVM>> => {
  return Http.getRequest(
    getPaymentV1PublicEpayrequestReceiptinfoToken.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getPaymentV1PublicEpayrequestReceiptinfoToken.key =
  "/payment/v1/public/epayrequest/receiptinfo/token";

export const getSettlementV1Private = (
  queryParams?: GetSettlementV1PrivateQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SettlementRequestInfoResponseVM>> => {
  return Http.getRequest(
    getSettlementV1Private.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1Private.key = "/settlement/v1/private";

export const getSettlementV1PrivateAddressbook = (
  queryParams?: GetSettlementV1PrivateAddressbookQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<AddressBookResponseVM>> => {
  return Http.getRequest(
    getSettlementV1PrivateAddressbook.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateAddressbook.key = "/settlement/v1/private/addressbook";

export const getSettlementV1PrivateAddressbookAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<AddressBookResponseVM[]>> => {
  return Http.getRequest(
    getSettlementV1PrivateAddressbookAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateAddressbookAll.key =
  "/settlement/v1/private/addressbook/all";

export const getSettlementV1PrivateCommission = (
  queryParams?: GetSettlementV1PrivateCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getSettlementV1PrivateCommission.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateCommission.key = "/settlement/v1/private/commission";

export const getSettlementV1PrivateCount = (
  queryParams?: GetSettlementV1PrivateCountQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<AggregationResultResponseVM>> => {
  return Http.getRequest(
    getSettlementV1PrivateCount.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateCount.key = "/settlement/v1/private/count";

export const getSettlementV1PrivateGlobalwalletproviderAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<GlobalWalletProviderResponseVM[]>> => {
  return Http.getRequest(
    getSettlementV1PrivateGlobalwalletproviderAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateGlobalwalletproviderAll.key =
  "/settlement/v1/private/globalwalletprovider/all";

export const getSettlementV1PrivateList = (
  queryParams?: GetSettlementV1PrivateListQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SettlementRequestInfoListResponseVM>> => {
  return Http.getRequest(
    getSettlementV1PrivateList.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateList.key = "/settlement/v1/private/list";

export const getSettlementV1PrivateReport = (
  queryParams?: GetSettlementV1PrivateReportQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ReportResultResponseVM[]>> => {
  return Http.getRequest(
    getSettlementV1PrivateReport.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateReport.key = "/settlement/v1/private/report";

export const getSettlementV1PrivateSubuser = (
  queryParams?: GetSettlementV1PrivateSubuserQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SettlementRequestInfoListResponseVM>> => {
  return Http.getRequest(
    getSettlementV1PrivateSubuser.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getSettlementV1PrivateSubuser.key = "/settlement/v1/private/subuser";

export const getStorageV1PrivateFileDownload = (
  queryParams?: GetStorageV1PrivateFileDownloadQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.getRequest(
    getStorageV1PrivateFileDownload.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
getStorageV1PrivateFileDownload.key = "/storage/v1/private/file/download";

export const getWalletV1Private = (
  queryParams?: GetWalletV1PrivateQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserWalletDisplayDetailResponseVM>> => {
  return Http.getRequest(
    getWalletV1Private.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1Private.key = "/wallet/v1/private";

export const getWalletV1PrivateAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserWalletDisplayResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateAll.key = "/wallet/v1/private/all";

export const getWalletV1PrivateBankAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<BanksResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateBankAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateBankAll.key = "/wallet/v1/private/bank/all";

export const getWalletV1PrivateGrouptransferCommission = (
  queryParams?: GetWalletV1PrivateGrouptransferCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getWalletV1PrivateGrouptransferCommission.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateGrouptransferCommission.key =
  "/wallet/v1/private/grouptransfer/commission";

export const getWalletV1PrivateInternalwithdrawInfo = (
  queryParams?: GetWalletV1PrivateInternalwithdrawInfoQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<InternalWithdrawResponseVM>> => {
  return Http.getRequest(
    getWalletV1PrivateInternalwithdrawInfo.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateInternalwithdrawInfo.key =
  "/wallet/v1/private/internalwithdraw/info";

export const getWalletV1PrivateSubuserAll = (
  queryParams?: GetWalletV1PrivateSubuserAllQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserMinimalResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateSubuserAll.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateSubuserAll.key = "/wallet/v1/private/subuser/all";

export const getWalletV1PrivateSubuserAssignable = (
  queryParams?: GetWalletV1PrivateSubuserAssignableQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserMinimalResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateSubuserAssignable.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateSubuserAssignable.key =
  "/wallet/v1/private/subuser/assignable";

export const getWalletV1PrivateTransferCommission = (
  queryParams?: GetWalletV1PrivateTransferCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<number>> => {
  return Http.getRequest(
    getWalletV1PrivateTransferCommission.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateTransferCommission.key =
  "/wallet/v1/private/transfer/commission";

export const getWalletV1PrivateUserassetAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserAssetResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateUserassetAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserassetAll.key = "/wallet/v1/private/userasset/all";

export const getWalletV1PrivateUserassetSpotDefault = (
  queryParams?: GetWalletV1PrivateUserassetSpotDefaultQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserCurrencyResponseVM>> => {
  return Http.getRequest(
    getWalletV1PrivateUserassetSpotDefault.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserassetSpotDefault.key =
  "/wallet/v1/private/userasset/spot/default";

export const getWalletV1PrivateUserassetSpotDefaultAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserAssetResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateUserassetSpotDefaultAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserassetSpotDefaultAll.key =
  "/wallet/v1/private/userasset/spot/default/all";

export const getWalletV1PrivateUserbankAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserBankResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateUserbankAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserbankAll.key = "/wallet/v1/private/userbank/all";

export const getWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank =
  (configOverride?: AxiosRequestConfig): Promise<SwaggerResponse<boolean>> => {
    return Http.getRequest(
      getWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.key,
      undefined,
      undefined,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
getWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.key =
  "/wallet/v1/private/userbank/hascurrentuserapprovedorpenddinguserbank";

export const getWalletV1PrivateUserbankStatus = (
  queryParams?: GetWalletV1PrivateUserbankStatusQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<IdentityStatus>> => {
  return Http.getRequest(
    getWalletV1PrivateUserbankStatus.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserbankStatus.key = "/wallet/v1/private/userbank/status";

export const getWalletV1PrivateUserreferralprogramAll = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserReferralProgramVM[]>> => {
  return Http.getRequest(
    getWalletV1PrivateUserreferralprogramAll.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserreferralprogramAll.key =
  "/wallet/v1/private/userreferralprogram/all";

export const getWalletV1PrivateUserreferralprogramDefault = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserReferralProgramVM>> => {
  return Http.getRequest(
    getWalletV1PrivateUserreferralprogramDefault.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PrivateUserreferralprogramDefault.key =
  "/wallet/v1/private/userreferralprogram/default";

export const getWalletV1PublicCurrencyInfo = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<DomainCurrencyResponseVM[]>> => {
  return Http.getRequest(
    getWalletV1PublicCurrencyInfo.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PublicCurrencyInfo.key = "/wallet/v1/public/currency/info";

export const getWalletV1PublicFind = (
  queryParams?: GetWalletV1PublicFindQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<FindUserWalletResponseVM>> => {
  return Http.getRequest(
    getWalletV1PublicFind.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
getWalletV1PublicFind.key = "/wallet/v1/public/find";

export const patchWalletV1Private = (
  requestBody: UpdateUserWalletRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.patchRequest(
    patchWalletV1Private.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
patchWalletV1Private.key = "/wallet/v1/private";

export const postApiCspreportLog = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postApiCspreportLog.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postApiCspreportLog.key = "/api/cspreport/log";

export const postAuthV1PrivateApikey = (
  requestBody: ApiKeyAddRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<ApiKeyAddResponseVM>> => {
  return Http.postRequest(
    postAuthV1PrivateApikey.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateApikey.key = "/auth/v1/private/apikey";

export const postAuthV1PrivateAuthDisabletwofactor = (
  requestBody: ChangeTwoFactorRequestVM,
  headerParams?: { platformType: PlatformType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthDisabletwofactor.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT3,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthDisabletwofactor.key =
  "/auth/v1/private/auth/disabletwofactor";

export const postAuthV1PrivateAuthEmail = (
  requestBody: NewEmailRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthEmail.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthEmail.key = "/auth/v1/private/auth/email";

export const postAuthV1PrivateAuthEmailSendcode = (
  queryParams?: PostAuthV1PrivateAuthEmailSendcodeQueryParams,
  headerParams?: { purpose: PurposeType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthEmailSendcode.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT2,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthEmailSendcode.key = "/auth/v1/private/auth/email/sendcode";

export const postAuthV1PrivateAuthEnabletwofactor = (
  requestBody: ChangeTwoFactorRequestVM,
  headerParams?: { platformType: PlatformType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthEnabletwofactor.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT3,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthEnabletwofactor.key =
  "/auth/v1/private/auth/enabletwofactor";

export const postAuthV1PrivateAuthGeneratewebsocketusertoken = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthGeneratewebsocketusertoken.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthGeneratewebsocketusertoken.key =
  "/auth/v1/private/auth/generatewebsocketusertoken";

export const postAuthV1PrivateAuthGetcode = (
  headerParams?: { purpose: PurposeType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthGetcode.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT2,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthGetcode.key = "/auth/v1/private/auth/getcode";

export const postAuthV1PrivateAuthPhonecallSendcode = (
  queryParams?: PostAuthV1PrivateAuthPhonecallSendcodeQueryParams,
  headerParams?: { purpose: PurposeType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthPhonecallSendcode.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT2,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthPhonecallSendcode.key =
  "/auth/v1/private/auth/phonecall/sendcode";

export const postAuthV1PrivateAuthRevoketoken = (
  requestBody: RevokeTokenRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAuthV1PrivateAuthRevoketoken.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PrivateAuthRevoketoken.key = "/auth/v1/private/auth/revoketoken";

export const postAuthV1PublicAuthAnonyverifysecure = (
  requestBody: VerifySecureRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PublicAuthAnonyverifysecure.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthAnonyverifysecure.key =
  "/auth/v1/public/auth/anonyverifysecure";

export const postAuthV1PublicAuthChecktwofactorisenable = (
  queryParams?: PostAuthV1PublicAuthChecktwofactorisenableQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserExistResponseVM>> => {
  return Http.postRequest(
    postAuthV1PublicAuthChecktwofactorisenable.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthChecktwofactorisenable.key =
  "/auth/v1/public/auth/checktwofactorisenable";

export const postAuthV1PublicAuthConnectToken = (
  requestBody: LoginModelRequestVM,
  headerParams?: { deviceId: string; platform: string },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<TokenResponseVM>> => {
  return Http.postRequest(
    postAuthV1PublicAuthConnectToken.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT2,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthConnectToken.key = "/auth/v1/public/auth/connect/token";

export const postAuthV1PublicAuthGetcaptcha = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<PuzzleModelResponseVM>> => {
  return Http.postRequest(
    postAuthV1PublicAuthGetcaptcha.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthGetcaptcha.key = "/auth/v1/public/auth/getcaptcha";

export const postAuthV1PublicAuthGetcode = (
  queryParams?: PostAuthV1PublicAuthGetcodeQueryParams,
  headerParams?: { purpose: PurposeType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PublicAuthGetcode.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT2,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthGetcode.key = "/auth/v1/public/auth/getcode";

export const postAuthV1PublicAuthRegister = (
  requestBody: RegisterRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<RegisterResponseVM>> => {
  return Http.postRequest(
    postAuthV1PublicAuthRegister.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthRegister.key = "/auth/v1/public/auth/register";

export const postAuthV1PublicAuthRegisterverify = (
  requestBody: VerifyUserPhoneNumberRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postAuthV1PublicAuthRegisterverify.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthRegisterverify.key = "/auth/v1/public/auth/registerverify";

export const postAuthV1PublicAuthSetuserbasicinfo = (
  requestBody: UserBasicInfoRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postAuthV1PublicAuthSetuserbasicinfo.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthSetuserbasicinfo.key =
  "/auth/v1/public/auth/setuserbasicinfo";

export const postAuthV1PublicAuthValidatecaptcha = (
  requestBody: PuzzleSubmissionRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<boolean>> => {
  return Http.postRequest(
    postAuthV1PublicAuthValidatecaptcha.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postAuthV1PublicAuthValidatecaptcha.key =
  "/auth/v1/public/auth/validatecaptcha";

export const postCapitalV1PrivateDepositQueryuserdepositaddress = (
  requestBody: UserDepositAddressRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserDepositAddressResponseVM>> => {
  return Http.postRequest(
    postCapitalV1PrivateDepositQueryuserdepositaddress.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postCapitalV1PrivateDepositQueryuserdepositaddress.key =
  "/capital/v1/private/deposit/queryuserdepositaddress";

export const postCapitalV1PrivateDepositQuerywalletdepositaddress = (
  requestBody: WalletDepositAddressRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserDepositAddressResponseVM>> => {
  return Http.postRequest(
    postCapitalV1PrivateDepositQuerywalletdepositaddress.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postCapitalV1PrivateDepositQuerywalletdepositaddress.key =
  "/capital/v1/private/deposit/querywalletdepositaddress";

export const postCapitalV1ProtectedWithdrawApply = (
  requestBody: WithdrawRequestUserWalletCreateRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<CreateWithdrawRequestUserWalletResponseVM>> => {
  return Http.postRequest(
    postCapitalV1ProtectedWithdrawApply.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postCapitalV1ProtectedWithdrawApply.key =
  "/capital/v1/protected/withdraw/apply";

export const postExchangeV1PrivateOrder = (
  requestBody: PlaceOrderRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OrderAckInfoResponseVM>> => {
  return Http.postRequest(
    postExchangeV1PrivateOrder.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postExchangeV1PrivateOrder.key = "/exchange/v1/private/order";

export const postExchangeV1PrivateOrderOco = (
  requestBody: PlaceOcoOrderRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<OcoOrderResultInfoResponseVM>> => {
  return Http.postRequest(
    postExchangeV1PrivateOrderOco.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postExchangeV1PrivateOrderOco.key = "/exchange/v1/private/order/oco";

export const postPartyV1PrivateFavoritemarket = (
  requestBody: UpdateFavoriteMarketRequestVM[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPartyV1PrivateFavoritemarket.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPartyV1PrivateFavoritemarket.key = "/party/v1/private/favoritemarket";

export const postPartyV1PrivateIdentificationlevelLevelone = (
  requestBody: UserIdentificationLevelOneRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPartyV1PrivateIdentificationlevelLevelone.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPartyV1PrivateIdentificationlevelLevelone.key =
  "/party/v1/private/identificationlevel/levelone";

export const postPartyV1PrivateIdentificationlevelLevelthree = (
  requestBody: UserIdentificationLevelThreeRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPartyV1PrivateIdentificationlevelLevelthree.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPartyV1PrivateIdentificationlevelLevelthree.key =
  "/party/v1/private/identificationlevel/levelthree";

export const postPartyV1PrivateIdentificationlevelLeveltwo = (
  requestBody: UserIdentificationLevelTwoRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPartyV1PrivateIdentificationlevelLeveltwo.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPartyV1PrivateIdentificationlevelLeveltwo.key =
  "/party/v1/private/identificationlevel/leveltwo";

export const postPartyV1PrivateUserProfileimage = (
  requestBody: {
    /** - Format: binary */
    file: string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postPartyV1PrivateUserProfileimage.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT4, configOverride),
  );
};

/** Key is end point string without base url */
postPartyV1PrivateUserProfileimage.key = "/party/v1/private/user/profileimage";

export const postPaymentV1PrivateEpayrequestCharge = (
  requestBody: CreateChargeRequestRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestCharge.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestCharge.key =
  "/payment/v1/private/epayrequest/charge";

export const postPaymentV1PrivateEpayrequestDivideipg = (
  requestBody: CreateDivideIpgRequestRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestDivideipg.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestDivideipg.key =
  "/payment/v1/private/epayrequest/divideipg";

export const postPaymentV1PrivateEpayrequestDividelink = (
  requestBody: CreateDivideLinkRequestRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestDividelink.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestDividelink.key =
  "/payment/v1/private/epayrequest/dividelink";

export const postPaymentV1PrivateEpayrequestIpg = (
  requestBody: CreateIpgRequestRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestIpg.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestIpg.key = "/payment/v1/private/epayrequest/ipg";

export const postPaymentV1PrivateEpayrequestLink = (
  requestBody: CreateLinkRequestRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestLink.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestLink.key =
  "/payment/v1/private/epayrequest/link";

export const postPaymentV1PrivateEpayrequestPaywithwallet = (
  requestBody: EpayPayWithWalletRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestPaywithwallet.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestPaywithwallet.key =
  "/payment/v1/private/epayrequest/paywithwallet";

export const postPaymentV1PrivateEpayrequestPostactioninternaldepositepayrequest =
  (
    requestBody: AddPostActionInternalDepositEPayRequestRequestVM,
    configOverride?: AxiosRequestConfig,
  ): Promise<SwaggerResponse<AddPostActionResponseVM>> => {
    return Http.postRequest(
      postPaymentV1PrivateEpayrequestPostactioninternaldepositepayrequest.key,
      undefined,
      requestBody,
      undefined,
      overrideConfig(_CONSTANT1, configOverride),
    );
  };

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestPostactioninternaldepositepayrequest.key =
  "/payment/v1/private/epayrequest/postactioninternaldepositepayrequest";

export const postPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder = (
  requestBody: AddPostActionPlaceMarketBuyOrderRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<AddPostActionResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder.key =
  "/payment/v1/private/epayrequest/postactionplacemarketbuyorder";

export const postPaymentV1PrivateEpayrequestSetpayercurrenyinfo = (
  requestBody: PayerCurrencyRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestSetpayercurrenyinfo.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestSetpayercurrenyinfo.key =
  "/payment/v1/private/epayrequest/setpayercurrenyinfo";

export const postPaymentV1PrivateEpayrequestUnblock = (
  queryParams?: PostPaymentV1PrivateEpayrequestUnblockQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPaymentV1PrivateEpayrequestUnblock.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PrivateEpayrequestUnblock.key =
  "/payment/v1/private/epayrequest/unblock";

export const postPaymentV1PublicEpayrequestPos = (
  requestBody: CreatePosRequestRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestResponseVM>> => {
  return Http.postRequest(
    postPaymentV1PublicEpayrequestPos.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PublicEpayrequestPos.key = "/payment/v1/public/epayrequest/pos";

export const postPaymentV1PublicEpayrequestSmsResend = (
  queryParams?: PostPaymentV1PublicEpayrequestSmsResendQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postPaymentV1PublicEpayrequestSmsResend.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postPaymentV1PublicEpayrequestSmsResend.key =
  "/payment/v1/public/epayrequest/sms/resend";

export const postSettlementV1PrivateAddressbook = (
  requestBody: AddressBookAddRequestVM[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postSettlementV1PrivateAddressbook.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postSettlementV1PrivateAddressbook.key = "/settlement/v1/private/addressbook";

export const postSettlementV1PrivateExcel = (
  requestBody: SettlementFilterRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SettlementExcelResponseVM[]>> => {
  return Http.postRequest(
    postSettlementV1PrivateExcel.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postSettlementV1PrivateExcel.key = "/settlement/v1/private/excel";

export const postSettlementV1PrivateUserWalletNumber = (
  userWalletNumber: string,
  requestBody: CreateSettlementRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<SettlementRequestInfoResponseVM>> => {
  return Http.postRequest(
    template(postSettlementV1PrivateUserWalletNumber.key, { userWalletNumber }),
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postSettlementV1PrivateUserWalletNumber.key =
  "/settlement/v1/private/{userWalletNumber}";

export const postStorageV1PrivateFileUploadfile = (
  requestBody: {
    /** - Format: binary */
    file: string;
  },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<string>> => {
  return Http.postRequest(
    postStorageV1PrivateFileUploadfile.key,
    undefined,
    objToForm(requestBody),
    undefined,
    overrideConfig(_CONSTANT4, configOverride),
  );
};

/** Key is end point string without base url */
postStorageV1PrivateFileUploadfile.key = "/storage/v1/private/file/uploadfile";

export const postWalletV1Private = (
  requestBody: CreateUserWalletRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<UserWalletResponseVM>> => {
  return Http.postRequest(
    postWalletV1Private.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1Private.key = "/wallet/v1/private";

export const postWalletV1PrivateGrouptransfer = (
  requestBody: GroupTransferMoneyRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<GroupTransferResponseVM>> => {
  return Http.postRequest(
    postWalletV1PrivateGrouptransfer.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1PrivateGrouptransfer.key = "/wallet/v1/private/grouptransfer";

export const postWalletV1PrivateTransfer = (
  requestBody: TransferMoneyRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<TransferMoneyResponseVM>> => {
  return Http.postRequest(
    postWalletV1PrivateTransfer.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1PrivateTransfer.key = "/wallet/v1/private/transfer";

export const postWalletV1PrivateUserbank = (
  requestBody: CreateUserBankRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postWalletV1PrivateUserbank.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1PrivateUserbank.key = "/wallet/v1/private/userbank";

export const postWalletV1PrivateUserbankDetailed = (
  requestBody: CreateUserBankDetailRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postWalletV1PrivateUserbankDetailed.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1PrivateUserbankDetailed.key =
  "/wallet/v1/private/userbank/detailed";

export const postWalletV1PrivateUserreferralprogram = (
  requestBody: UserReferralProgramAddVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postWalletV1PrivateUserreferralprogram.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1PrivateUserreferralprogram.key =
  "/wallet/v1/private/userreferralprogram";

export const postWalletV1PrivateWalletpermission = (
  requestBody: SubuserAccessRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.postRequest(
    postWalletV1PrivateWalletpermission.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
postWalletV1PrivateWalletpermission.key = "/wallet/v1/private/walletpermission";

export const putAuthV1PrivateApikey = (
  requestBody: ApiKeyUpdateRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putAuthV1PrivateApikey.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putAuthV1PrivateApikey.key = "/auth/v1/private/apikey";

export const putAuthV1PrivateAuthEmail = (
  requestBody: ChangeEmailRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putAuthV1PrivateAuthEmail.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putAuthV1PrivateAuthEmail.key = "/auth/v1/private/auth/email";

export const putAuthV1ProtectAuthChangepassword = (
  requestBody: ChangePasswordRequestVM,
  headerParams?: { platformType: PlatformType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putAuthV1ProtectAuthChangepassword.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT3,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
putAuthV1ProtectAuthChangepassword.key = "/auth/v1/protect/auth/changepassword";

export const putAuthV1PublicAuthForgotpassword = (
  requestBody: ForgotPasswordRequestVM,
  headerParams?: { platformType: PlatformType },
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putAuthV1PublicAuthForgotpassword.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(
      {
        headers: {
          ..._CONSTANT3,
          ...headerParams,
        },
      },
      configOverride,
    ),
  );
};

/** Key is end point string without base url */
putAuthV1PublicAuthForgotpassword.key = "/auth/v1/public/auth/forgotpassword";

export const putEngagementV1PrivateNotificationRead = (
  requestBody: number[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putEngagementV1PrivateNotificationRead.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putEngagementV1PrivateNotificationRead.key =
  "/engagement/v1/private/notification/read";

export const putEngagementV1PrivateNotificationReadall = (
  queryParams?: PutEngagementV1PrivateNotificationReadallQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putEngagementV1PrivateNotificationReadall.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putEngagementV1PrivateNotificationReadall.key =
  "/engagement/v1/private/notification/readall";

export const putPartyV1PrivateNotificationRead = (
  requestBody: number[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putPartyV1PrivateNotificationRead.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putPartyV1PrivateNotificationRead.key = "/party/v1/private/notification/read";

export const putPartyV1PrivateNotificationReadall = (
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putPartyV1PrivateNotificationReadall.key,
    undefined,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putPartyV1PrivateNotificationReadall.key =
  "/party/v1/private/notification/readall";

export const putPartyV1PrivatePlugin = (
  requestBody: UserPluginTogggleRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putPartyV1PrivatePlugin.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putPartyV1PrivatePlugin.key = "/party/v1/private/plugin";

export const putPartyV1PrivateUsersettingPreference = (
  requestBody: PreferenceUserSettingRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putPartyV1PrivateUsersettingPreference.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putPartyV1PrivateUsersettingPreference.key =
  "/party/v1/private/usersetting/preference";

export const putPaymentV1PrivateEpayrequestAssigneduser = (
  requestBody: UpdateEpayRequestAssignedUserRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestInfoResponseVM>> => {
  return Http.putRequest(
    putPaymentV1PrivateEpayrequestAssigneduser.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
putPaymentV1PrivateEpayrequestAssigneduser.key =
  "/payment/v1/private/epayrequest/assigneduser";

export const putPaymentV1PublicEpayrequestCancel = (
  queryParams?: PutPaymentV1PublicEpayrequestCancelQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putPaymentV1PublicEpayrequestCancel.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putPaymentV1PublicEpayrequestCancel.key =
  "/payment/v1/public/epayrequest/cancel";

export const putPaymentV1PublicEpayrequestCustomdata = (
  requestBody: UpdateEpayRequestCustomDataRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<EpayRequestInfoResponseVM>> => {
  return Http.putRequest(
    putPaymentV1PublicEpayrequestCustomdata.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT1, configOverride),
  );
};

/** Key is end point string without base url */
putPaymentV1PublicEpayrequestCustomdata.key =
  "/payment/v1/public/epayrequest/customdata";

export const putSettlementV1PrivateAddressbookWhitelistDisable = (
  requestBody: number[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putSettlementV1PrivateAddressbookWhitelistDisable.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putSettlementV1PrivateAddressbookWhitelistDisable.key =
  "/settlement/v1/private/addressbook/whitelist/disable";

export const putSettlementV1PrivateAddressbookWhitelistEnable = (
  requestBody: number[],
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putSettlementV1PrivateAddressbookWhitelistEnable.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putSettlementV1PrivateAddressbookWhitelistEnable.key =
  "/settlement/v1/private/addressbook/whitelist/enable";

export const putWalletV1PrivateUserreferralprogramDefault = (
  queryParams?: PutWalletV1PrivateUserreferralprogramDefaultQueryParams,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putWalletV1PrivateUserreferralprogramDefault.key,
    queryParams,
    undefined,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putWalletV1PrivateUserreferralprogramDefault.key =
  "/wallet/v1/private/userreferralprogram/default";

export const putWalletV1PrivateWalletpermission = (
  requestBody: PermissionRequestVM,
  configOverride?: AxiosRequestConfig,
): Promise<SwaggerResponse<any>> => {
  return Http.putRequest(
    putWalletV1PrivateWalletpermission.key,
    undefined,
    requestBody,
    undefined,
    overrideConfig(_CONSTANT0, configOverride),
  );
};

/** Key is end point string without base url */
putWalletV1PrivateWalletpermission.key = "/wallet/v1/private/walletpermission";
export const _CONSTANT0 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
};
export const _CONSTANT1 = {
  headers: {
    "Content-Type": "application/json",
    Accept: "text/plain",
  },
};
export const _CONSTANT2 = {
  "Content-Type": "application/json",
  Accept: "text/plain",
};
export const _CONSTANT3 = {
  "Content-Type": "application/json",
  Accept: "application/json",
};
export const _CONSTANT4 = {
  headers: {
    "Content-Type": "multipart/form-data",
    Accept: "text/plain",
  },
};
