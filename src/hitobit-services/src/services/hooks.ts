/**
 * AUTO_GENERATED Do not change this file directly, use config.ts file instead
 *
 * @version 5
 */

import { AxiosRequestConfig } from "axios";
import { useMemo } from "react";
import {
  QueryClient,
  QueryKey,
  useInfiniteQuery,
  UseInfiniteQueryOptions,
  useMutation,
  UseMutationOptions,
  useQuery,
  UseQueryOptions,
} from "react-query";
import { RequestError, SwaggerResponse } from "./config";
import { getPageSize, getTotal, paginationFlattenData } from "./hooksConfig";
import {
  deleteAuthV1PrivateApikey,
  deleteAuthV1PrivateApikeyAll,
  deleteAuthV1PrivateAuthEmail,
  deleteAuthV1PrivateUsertrusteddevice,
  deleteEngagementV1PrivateNotificationClearall,
  deleteExchangeV1PrivateOpenorders,
  deleteExchangeV1PrivateOrder,
  deleteExchangeV1PrivateOrderlist,
  deletePartyV1PrivateFavoritemarket,
  deletePartyV1PrivateNotification,
  deletePartyV1PrivateNotificationAll,
  deleteSettlementV1PrivateAddressbook,
  deleteWalletV1PrivateWalletpermission,
  getAnalyticsV1PrivateResellercommissionhistoryActiveusercount,
  getAnalyticsV1PrivateResellercommissionhistoryNewusercount,
  getAnalyticsV1PrivateResellercommissionhistoryTotalincome,
  getAnalyticsV1PrivateResellercommissionhistoryTransactioncount,
  getAnalyticsV1PrivateSecurityactivityList,
  getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList,
  getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent,
  getAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory,
  getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList,
  getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent,
  getAnalyticsV1PrivateUserloginhistoryLast,
  getAnalyticsV1PrivateUserloginhistoryList,
  getAnalyticsV1PublicTradereferralcommissionhistoryRank,
  getAuthV1PrivateApikey,
  getAuthV1PrivateApikeyList,
  getAuthV1PrivateAuthGetqrcode,
  getAuthV1PrivateAuthUserstatus,
  getAuthV1PrivateIdentityresourceGetpropertylist,
  getAuthV1PrivateIdentityresourceGetscopelist,
  getAuthV1PrivateUsertrusteddeviceList,
  getAuthV1PrivateUsertrusteddeviceLoginhistoryList,
  getAuthV1PublicAuthIsphonenumberregistered,
  getBaseinfoV1PublicCityList,
  getBaseinfoV1PublicCountryAll,
  getBaseinfoV1PublicProvinceList,
  getCapitalV1PrivateDepositList,
  getCapitalV1PrivateDepositRecent,
  getCapitalV1PrivatePosList,
  getCapitalV1PrivateSettlementList,
  getCapitalV1PrivateWithdrawDetail,
  getCapitalV1PrivateWithdrawList,
  getCapitalV1PrivateWithdrawRecent,
  getCapitalV1PrivateWithdrawTodaytotal,
  getCapitalV1PublicCurrencyAll,
  getCapitalV1PublicMoneynetworkAll,
  getEngagementV1PrivateNotification,
  getEngagementV1PrivateNotificationCount,
  getExchangeV1PrivateAllorderlist,
  getExchangeV1PrivateAllorders,
  getExchangeV1PrivateAlltrades,
  getExchangeV1PrivateOpenocoorderlist,
  getExchangeV1PrivateOpenorders,
  getExchangeV1PrivateOrder,
  getExchangeV1PrivateOrderlist,
  getExchangeV1PrivateUsertraderlevel,
  getExchangeV1PublicAlltickers24hr,
  getExchangeV1PublicDepth,
  getExchangeV1PublicDomaintraderlevels,
  getExchangeV1PublicKlines,
  getExchangeV1PublicMarkets,
  getExchangeV1PublicTicker24hr,
  getExchangeV1PublicTrades,
  getPartyV1PrivateDeviceAll,
  getPartyV1PrivateDomainForcetwofa,
  getPartyV1PrivateDomainMultiwallet,
  getPartyV1PrivateDomainSetting,
  getPartyV1PrivateFavoritemarket,
  getPartyV1PrivateIdentificationlevelInfo,
  getPartyV1PrivateIdentificationlevelUserInfo,
  getPartyV1PrivateNotificationAll,
  getPartyV1PrivateNotificationTypes,
  getPartyV1PrivatePluginList,
  getPartyV1PrivateUserByuserreferralprogramid,
  getPartyV1PrivateUsersettingPreference,
  getPartyV1PrivateWalletsettingMaxreferalprogrampercent,
  getPartyV1PublicIdentificationlevelGuide,
  getPaymentV1PrivateEpayrequestCommission,
  getPaymentV1PrivateEpayrequestCount,
  getPaymentV1PrivateEpayrequestCountFromme,
  getPaymentV1PrivateEpayrequestInfoClientuniqueid,
  getPaymentV1PrivateEpayrequestList,
  getPaymentV1PrivateEpayrequestListFromme,
  getPaymentV1PrivateEpayrequestPluginCount,
  getPaymentV1PublicEpayrequestGetblockchainaddress,
  getPaymentV1PublicEpayrequestInfoToken,
  getPaymentV1PublicEpayrequestReceiptinfoClientuniqueid,
  getPaymentV1PublicEpayrequestReceiptinfoToken,
  getPaymentV1PublicEpayrequestSmsResend,
  getSettlementV1Private,
  getSettlementV1PrivateAddressbook,
  getSettlementV1PrivateAddressbookAll,
  getSettlementV1PrivateCommission,
  getSettlementV1PrivateCount,
  getSettlementV1PrivateGlobalwalletproviderAll,
  getSettlementV1PrivateList,
  getSettlementV1PrivateReport,
  getSettlementV1PrivateSubuser,
  getStorageV1PrivateFileDownload,
  getWalletV1Private,
  getWalletV1PrivateAll,
  getWalletV1PrivateBankAll,
  getWalletV1PrivateGrouptransferCommission,
  getWalletV1PrivateInternalwithdrawInfo,
  getWalletV1PrivateSubuserAll,
  getWalletV1PrivateSubuserAssignable,
  getWalletV1PrivateTransferCommission,
  getWalletV1PrivateUserassetAll,
  getWalletV1PrivateUserassetSpotDefault,
  getWalletV1PrivateUserassetSpotDefaultAll,
  getWalletV1PrivateUserbankAll,
  getWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank,
  getWalletV1PrivateUserbankStatus,
  getWalletV1PrivateUserreferralprogramAll,
  getWalletV1PrivateUserreferralprogramDefault,
  getWalletV1PublicCurrencyInfo,
  getWalletV1PublicFind,
  patchWalletV1Private,
  postApiCspreportLog,
  postAuthV1PrivateApikey,
  postAuthV1PrivateAuthDisabletwofactor,
  postAuthV1PrivateAuthEmail,
  postAuthV1PrivateAuthEmailSendcode,
  postAuthV1PrivateAuthEnabletwofactor,
  postAuthV1PrivateAuthGeneratewebsocketusertoken,
  postAuthV1PrivateAuthGetcode,
  postAuthV1PrivateAuthPhonecallSendcode,
  postAuthV1PrivateAuthRevoketoken,
  postAuthV1PublicAuthAnonyverifysecure,
  postAuthV1PublicAuthChecktwofactorisenable,
  postAuthV1PublicAuthConnectToken,
  postAuthV1PublicAuthGetcaptcha,
  postAuthV1PublicAuthGetcode,
  postAuthV1PublicAuthRegister,
  postAuthV1PublicAuthRegisterverify,
  postAuthV1PublicAuthSetuserbasicinfo,
  postAuthV1PublicAuthValidatecaptcha,
  postCapitalV1PrivateDepositQueryuserdepositaddress,
  postCapitalV1PrivateDepositQuerywalletdepositaddress,
  postCapitalV1ProtectedWithdrawApply,
  postExchangeV1PrivateOrder,
  postExchangeV1PrivateOrderOco,
  postPartyV1PrivateFavoritemarket,
  postPartyV1PrivateIdentificationlevelLevelthree,
  postPartyV1PrivateIdentificationlevelLeveltwo,
  postPartyV1PrivateUserProfileimage,
  postPaymentV1PrivateEpayrequestCharge,
  postPaymentV1PrivateEpayrequestDivideipg,
  postPaymentV1PrivateEpayrequestDividelink,
  postPaymentV1PrivateEpayrequestIpg,
  postPaymentV1PrivateEpayrequestLink,
  postPaymentV1PrivateEpayrequestPaywithwallet,
  postPaymentV1PrivateEpayrequestPostactioninternaldepositepayrequest,
  postPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder,
  postPaymentV1PrivateEpayrequestSetpayercurrenyinfo,
  postPaymentV1PrivateEpayrequestUnblock,
  postPaymentV1PublicEpayrequestPos,
  postSettlementV1PrivateAddressbook,
  postSettlementV1PrivateExcel,
  postSettlementV1PrivateUserWalletNumber,
  postStorageV1PrivateFileUploadfile,
  postWalletV1Private,
  postWalletV1PrivateGrouptransfer,
  postWalletV1PrivateTransfer,
  postWalletV1PrivateUserbank,
  postWalletV1PrivateUserbankDetailed,
  postWalletV1PrivateUserreferralprogram,
  postWalletV1PrivateWalletpermission,
  putAuthV1PrivateApikey,
  putAuthV1PrivateAuthEmail,
  putAuthV1ProtectAuthChangepassword,
  putAuthV1PublicAuthForgotpassword,
  putEngagementV1PrivateNotificationRead,
  putEngagementV1PrivateNotificationReadall,
  putPartyV1PrivateNotificationRead,
  putPartyV1PrivateNotificationReadall,
  putPartyV1PrivatePlugin,
  putPartyV1PrivateUsersettingPreference,
  putPaymentV1PrivateEpayrequestAssigneduser,
  putPaymentV1PublicEpayrequestCancel,
  putPaymentV1PublicEpayrequestCustomdata,
  putSettlementV1PrivateAddressbookWhitelistDisable,
  putSettlementV1PrivateAddressbookWhitelistEnable,
  putWalletV1PrivateUserreferralprogramDefault,
  putWalletV1PrivateWalletpermission,
} from "./services";
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
  GetPaymentV1PublicEpayrequestSmsResendQueryParams,
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
  GlobalWalletProviderResponseVM,
  GroupTransferMoneyRequestVM,
  GroupTransferResponseVM,
  IdentificationLevel,
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
  PostAuthV1PrivateAuthEmailSendcodeQueryParams,
  PostAuthV1PrivateAuthPhonecallSendcodeQueryParams,
  PostAuthV1PublicAuthChecktwofactorisenableQueryParams,
  PostAuthV1PublicAuthGetcodeQueryParams,
  PostPaymentV1PrivateEpayrequestUnblockQueryParams,
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
  ReferralHistoryListVM,
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

const useHasMore = (
  pages: Array<SwaggerResponse<any>> | undefined,
  list: any,
  queryParams: any,
) =>
  useMemo(() => {
    if (!pages || (pages && pages.length < 1)) {
      return false;
    }

    const total = getTotal(pages);

    if (total !== undefined) {
      if (list && list.length < total) {
        return true;
      }
      return false;
    }
    if (
      paginationFlattenData([pages[pages.length - 1]])?.length ===
      getPageSize(queryParams as any)
    ) {
      return true;
    }

    return false;
  }, [pages, list, queryParams]);

export type SwaggerTypescriptMutationDefaultParams<TExtra> = {
  _extraVariables?: TExtra;
  configOverride?: AxiosRequestConfig;
};
type SwaggerTypescriptUseQueryOptions<TData> = UseQueryOptions<
  SwaggerResponse<TData>,
  RequestError | Error
>;

type SwaggerTypescriptUseMutationOptions<TData, TRequest, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    TRequest & SwaggerTypescriptMutationDefaultParams<TExtra>
  >;

type SwaggerTypescriptUseMutationOptionsVoid<TData, TExtra> =
  UseMutationOptions<
    SwaggerResponse<TData>,
    RequestError | Error,
    SwaggerTypescriptMutationDefaultParams<TExtra> | void
  >;

export const useDeleteAuthV1PrivateApikey = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: DeleteAuthV1PrivateApikeyQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return deleteAuthV1PrivateApikey(queryParams, configOverride);
  }, options);
};

export const useDeleteAuthV1PrivateApikeyAll = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptionsVoid<any, TExtra>,
) => {
  return useMutation((_o) => {
    const { configOverride } = _o || {};

    return deleteAuthV1PrivateApikeyAll(configOverride);
  }, options);
};

export const useDeleteAuthV1PrivateAuthEmail = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: RemoveEmailRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deleteAuthV1PrivateAuthEmail(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeleteAuthV1PrivateUsertrusteddevice = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: DeleteAuthV1PrivateUsertrusteddeviceQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return deleteAuthV1PrivateUsertrusteddevice(queryParams, configOverride);
  }, options);
};

export const useDeleteEngagementV1PrivateNotificationClearall = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: DeleteEngagementV1PrivateNotificationClearallQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return deleteEngagementV1PrivateNotificationClearall(
      queryParams,
      configOverride,
    );
  }, options);
};

export const useDeleteExchangeV1PrivateOpenorders = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    CancelOrderResponseVM[],
    { requestBody: CancelAllOrdersRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deleteExchangeV1PrivateOpenorders(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeleteExchangeV1PrivateOrder = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    CancelOrderResponseVM,
    { requestBody: CancelOrderRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deleteExchangeV1PrivateOrder(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeleteExchangeV1PrivateOrderlist = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    CancelOcoOrderResponseVM,
    { requestBody: CancelOcoOrderRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deleteExchangeV1PrivateOrderlist(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeletePartyV1PrivateFavoritemarket = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UpdateFavoriteMarketRequestVM[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deletePartyV1PrivateFavoritemarket(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeletePartyV1PrivateNotification = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: number[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deletePartyV1PrivateNotification(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeletePartyV1PrivateNotificationAll = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptionsVoid<any, TExtra>,
) => {
  return useMutation((_o) => {
    const { configOverride } = _o || {};

    return deletePartyV1PrivateNotificationAll(configOverride);
  }, options);
};

export const useDeleteSettlementV1PrivateAddressbook = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: number[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deleteSettlementV1PrivateAddressbook(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useDeleteWalletV1PrivateWalletpermission = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: SubuserAccessRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return deleteWalletV1PrivateWalletpermission(
      requestBody,

      configOverride,
    );
  }, options);
};

export const useGetAnalyticsV1PrivateResellercommissionhistoryActiveusercount =
  (
    queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryActiveusercountQueryParams,
    options?: SwaggerTypescriptUseQueryOptions<number>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateResellercommissionhistoryActiveusercount.info(
        queryParams,
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetAnalyticsV1PrivateResellercommissionhistoryActiveusercount.info = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryActiveusercountQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateResellercommissionhistoryActiveusercount.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getAnalyticsV1PrivateResellercommissionhistoryActiveusercount(
        queryParams,

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateResellercommissionhistoryActiveusercount.prefetch = (
  client: QueryClient,
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryActiveusercountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateResellercommissionhistoryActiveusercount.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PrivateResellercommissionhistoryNewusercount = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryNewusercountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateResellercommissionhistoryNewusercount.info(
      queryParams,
      configOverride,
    );
  return useQuery(key, fun, options);
};
useGetAnalyticsV1PrivateResellercommissionhistoryNewusercount.info = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryNewusercountQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateResellercommissionhistoryNewusercount.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getAnalyticsV1PrivateResellercommissionhistoryNewusercount(
        queryParams,

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateResellercommissionhistoryNewusercount.prefetch = (
  client: QueryClient,
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryNewusercountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateResellercommissionhistoryNewusercount.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PrivateResellercommissionhistoryTotalincome = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTotalincomeQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateResellercommissionhistoryTotalincome.info(
      queryParams,
      configOverride,
    );
  return useQuery(key, fun, options);
};
useGetAnalyticsV1PrivateResellercommissionhistoryTotalincome.info = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTotalincomeQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateResellercommissionhistoryTotalincome.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getAnalyticsV1PrivateResellercommissionhistoryTotalincome(
        queryParams,

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateResellercommissionhistoryTotalincome.prefetch = (
  client: QueryClient,
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTotalincomeQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateResellercommissionhistoryTotalincome.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PrivateResellercommissionhistoryTransactioncount =
  (
    queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTransactioncountQueryParams,
    options?: SwaggerTypescriptUseQueryOptions<number>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateResellercommissionhistoryTransactioncount.info(
        queryParams,
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetAnalyticsV1PrivateResellercommissionhistoryTransactioncount.info = (
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTransactioncountQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateResellercommissionhistoryTransactioncount.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getAnalyticsV1PrivateResellercommissionhistoryTransactioncount(
        queryParams,

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateResellercommissionhistoryTransactioncount.prefetch = (
  client: QueryClient,
  queryParams?: GetAnalyticsV1PrivateResellercommissionhistoryTransactioncountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateResellercommissionhistoryTransactioncount.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PrivateSecurityactivityList = (
  queryParams?: GetAnalyticsV1PrivateSecurityactivityListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<SecurityActivityListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAnalyticsV1PrivateSecurityactivityList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        page: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetAnalyticsV1PrivateSecurityactivityList.info = (
  queryParams?: GetAnalyticsV1PrivateSecurityactivityListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateSecurityactivityList.key,

      queryParams,
    ] as QueryKey,
    fun: (
      _param?: Partial<GetAnalyticsV1PrivateSecurityactivityListQueryParams>,
    ) =>
      getAnalyticsV1PrivateSecurityactivityList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateSecurityactivityList.prefetch = (
  client: QueryClient,
  queryParams?: GetAnalyticsV1PrivateSecurityactivityListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<SecurityActivityListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAnalyticsV1PrivateSecurityactivityList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateListQueryParams,
    options?: SwaggerTypescriptUseQueryOptions<TradeReferralCommissionHistoryListResponseVM>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.info(
        queryParams,
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.info =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateListQueryParams,
    configOverride?: AxiosRequestConfig,
  ) => {
    return {
      key: [
        getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.key,

        queryParams,
      ] as QueryKey,
      fun: () =>
        getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList(
          queryParams,

          configOverride,
        ),
    };
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.prefetch =
  (
    client: QueryClient,
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateListQueryParams,
    options?: SwaggerTypescriptUseQueryOptions<TradeReferralCommissionHistoryListResponseVM>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateList.info(
        queryParams,
        configOverride,
      );

    return client.getQueryData(key)
      ? Promise.resolve()
      : client.prefetchQuery(key, () => fun(), options);
  };
export const useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent =
  (
    options?: SwaggerTypescriptUseQueryOptions<
      TradeReferralCommissionHistoryResponseVM[]
    >,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.info(
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.info =
  (configOverride?: AxiosRequestConfig) => {
    return {
      key: [
        getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.key,
      ] as QueryKey,
      fun: () =>
        getAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent(
          configOverride,
        ),
    };
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.prefetch =
  (
    client: QueryClient,
    options?: SwaggerTypescriptUseQueryOptions<
      TradeReferralCommissionHistoryResponseVM[]
    >,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryCommissionrebateRecent.info(
        configOverride,
      );

    return client.getQueryData(key)
      ? Promise.resolve()
      : client.prefetchQuery(key, () => fun(), options);
  };
export const useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistoryQueryParams,
    options?: UseInfiniteQueryOptions<
      SwaggerResponse<ReferralHistoryListVM>,
      RequestError | Error
    >,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.info(
        queryParams,
        configOverride,
      );
    const {
      data: { pages } = {},
      data,
      ...rest
    } = useInfiniteQuery(
      key,
      ({ pageParam = 1 }) =>
        fun({
          pageNo: pageParam,
        }),
      {
        getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
        ...(options as any),
      },
    );

    const list = useMemo(() => paginationFlattenData(pages), [pages]);
    const total = getTotal(pages);

    const hasMore = useHasMore(pages, list, queryParams);

    return { ...rest, data, list, hasMore, total };
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.info = (
  queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistoryQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.key,

      queryParams,
    ] as QueryKey,
    fun: (
      _param?: Partial<GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistoryQueryParams>,
    ) =>
      getAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.prefetch =
  (
    client: QueryClient,
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistoryQueryParams,
    options?: UseInfiniteQueryOptions<
      SwaggerResponse<ReferralHistoryListVM>,
      RequestError | Error
    >,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralhistory.info(
        queryParams,
        configOverride,
      );

    return client.getQueryData(key)
      ? Promise.resolve()
      : client.prefetchQuery(key, () => fun(), options);
  };
export const useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackListQueryParams,
    options?: SwaggerTypescriptUseQueryOptions<TradeReferralCommissionHistoryListResponseVM>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.info(
        queryParams,
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.info =
  (
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackListQueryParams,
    configOverride?: AxiosRequestConfig,
  ) => {
    return {
      key: [
        getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.key,

        queryParams,
      ] as QueryKey,
      fun: () =>
        getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList(
          queryParams,

          configOverride,
        ),
    };
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.prefetch =
  (
    client: QueryClient,
    queryParams?: GetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackListQueryParams,
    options?: SwaggerTypescriptUseQueryOptions<TradeReferralCommissionHistoryListResponseVM>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackList.info(
        queryParams,
        configOverride,
      );

    return client.getQueryData(key)
      ? Promise.resolve()
      : client.prefetchQuery(key, () => fun(), options);
  };
export const useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent =
  (
    options?: SwaggerTypescriptUseQueryOptions<
      TradeReferralCommissionHistoryResponseVM[]
    >,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.info(
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.info =
  (configOverride?: AxiosRequestConfig) => {
    return {
      key: [
        getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.key,
      ] as QueryKey,
      fun: () =>
        getAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent(
          configOverride,
        ),
    };
  };
useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.prefetch =
  (
    client: QueryClient,
    options?: SwaggerTypescriptUseQueryOptions<
      TradeReferralCommissionHistoryResponseVM[]
    >,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetAnalyticsV1PrivateTradereferralcommissionhistoryReferralkickbackRecent.info(
        configOverride,
      );

    return client.getQueryData(key)
      ? Promise.resolve()
      : client.prefetchQuery(key, () => fun(), options);
  };
export const useGetAnalyticsV1PrivateUserloginhistoryLast = (
  options?: SwaggerTypescriptUseQueryOptions<UserLoginHistoryDetailsVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateUserloginhistoryLast.info(configOverride);
  return useQuery(key, fun, options);
};
useGetAnalyticsV1PrivateUserloginhistoryLast.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAnalyticsV1PrivateUserloginhistoryLast.key] as QueryKey,
    fun: () => getAnalyticsV1PrivateUserloginhistoryLast(configOverride),
  };
};
useGetAnalyticsV1PrivateUserloginhistoryLast.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserLoginHistoryDetailsVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PrivateUserloginhistoryLast.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PrivateUserloginhistoryList = (
  queryParams?: GetAnalyticsV1PrivateUserloginhistoryListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<UserLoginHistoryListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAnalyticsV1PrivateUserloginhistoryList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNumber: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetAnalyticsV1PrivateUserloginhistoryList.info = (
  queryParams?: GetAnalyticsV1PrivateUserloginhistoryListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PrivateUserloginhistoryList.key,

      queryParams,
    ] as QueryKey,
    fun: (
      _param?: Partial<GetAnalyticsV1PrivateUserloginhistoryListQueryParams>,
    ) =>
      getAnalyticsV1PrivateUserloginhistoryList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetAnalyticsV1PrivateUserloginhistoryList.prefetch = (
  client: QueryClient,
  queryParams?: GetAnalyticsV1PrivateUserloginhistoryListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<UserLoginHistoryListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAnalyticsV1PrivateUserloginhistoryList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAnalyticsV1PublicTradereferralcommissionhistoryRank = (
  options?: SwaggerTypescriptUseQueryOptions<
    TradeReferralCommissionRankingResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PublicTradereferralcommissionhistoryRank.info(
      configOverride,
    );
  return useQuery(key, fun, options);
};
useGetAnalyticsV1PublicTradereferralcommissionhistoryRank.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAnalyticsV1PublicTradereferralcommissionhistoryRank.key,
    ] as QueryKey,
    fun: () =>
      getAnalyticsV1PublicTradereferralcommissionhistoryRank(configOverride),
  };
};
useGetAnalyticsV1PublicTradereferralcommissionhistoryRank.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<
    TradeReferralCommissionRankingResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAnalyticsV1PublicTradereferralcommissionhistoryRank.info(
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateApikey = (
  queryParams?: GetAuthV1PrivateApikeyQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<ApiKeyResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateApikey.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetAuthV1PrivateApikey.info = (
  queryParams?: GetAuthV1PrivateApikeyQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateApikey.key, queryParams] as QueryKey,
    fun: () =>
      getAuthV1PrivateApikey(
        queryParams,

        configOverride,
      ),
  };
};
useGetAuthV1PrivateApikey.prefetch = (
  client: QueryClient,
  queryParams?: GetAuthV1PrivateApikeyQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<ApiKeyResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateApikey.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateApikeyList = (
  queryParams?: GetAuthV1PrivateApikeyListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<ApiKeyListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateApikeyList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        Page: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetAuthV1PrivateApikeyList.info = (
  queryParams?: GetAuthV1PrivateApikeyListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateApikeyList.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetAuthV1PrivateApikeyListQueryParams>) =>
      getAuthV1PrivateApikeyList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetAuthV1PrivateApikeyList.prefetch = (
  client: QueryClient,
  queryParams?: GetAuthV1PrivateApikeyListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<ApiKeyListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateApikeyList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateAuthGetqrcode = (
  options?: SwaggerTypescriptUseQueryOptions<QrCodeResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateAuthGetqrcode.info(configOverride);
  return useQuery(key, fun, options);
};
useGetAuthV1PrivateAuthGetqrcode.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateAuthGetqrcode.key] as QueryKey,
    fun: () => getAuthV1PrivateAuthGetqrcode(configOverride),
  };
};
useGetAuthV1PrivateAuthGetqrcode.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<QrCodeResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateAuthGetqrcode.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateAuthUserstatus = (
  options?: SwaggerTypescriptUseQueryOptions<UserStatusResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateAuthUserstatus.info(configOverride);
  return useQuery(key, fun, options);
};
useGetAuthV1PrivateAuthUserstatus.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateAuthUserstatus.key] as QueryKey,
    fun: () => getAuthV1PrivateAuthUserstatus(configOverride),
  };
};
useGetAuthV1PrivateAuthUserstatus.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserStatusResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateAuthUserstatus.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateIdentityresourceGetpropertylist = (
  options?: SwaggerTypescriptUseQueryOptions<string[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAuthV1PrivateIdentityresourceGetpropertylist.info(configOverride);
  return useQuery(key, fun, options);
};
useGetAuthV1PrivateIdentityresourceGetpropertylist.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateIdentityresourceGetpropertylist.key] as QueryKey,
    fun: () => getAuthV1PrivateIdentityresourceGetpropertylist(configOverride),
  };
};
useGetAuthV1PrivateIdentityresourceGetpropertylist.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<string[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAuthV1PrivateIdentityresourceGetpropertylist.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateIdentityresourceGetscopelist = (
  options?: SwaggerTypescriptUseQueryOptions<ApiScopeResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAuthV1PrivateIdentityresourceGetscopelist.info(configOverride);
  return useQuery(key, fun, options);
};
useGetAuthV1PrivateIdentityresourceGetscopelist.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateIdentityresourceGetscopelist.key] as QueryKey,
    fun: () => getAuthV1PrivateIdentityresourceGetscopelist(configOverride),
  };
};
useGetAuthV1PrivateIdentityresourceGetscopelist.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<ApiScopeResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAuthV1PrivateIdentityresourceGetscopelist.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateUsertrusteddeviceList = (
  queryParams?: GetAuthV1PrivateUsertrusteddeviceListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<UserTrustedDeviceListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateUsertrusteddeviceList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        Page: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetAuthV1PrivateUsertrusteddeviceList.info = (
  queryParams?: GetAuthV1PrivateUsertrusteddeviceListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getAuthV1PrivateUsertrusteddeviceList.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetAuthV1PrivateUsertrusteddeviceListQueryParams>) =>
      getAuthV1PrivateUsertrusteddeviceList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetAuthV1PrivateUsertrusteddeviceList.prefetch = (
  client: QueryClient,
  queryParams?: GetAuthV1PrivateUsertrusteddeviceListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<UserTrustedDeviceListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PrivateUsertrusteddeviceList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PrivateUsertrusteddeviceLoginhistoryList = (
  queryParams?: GetAuthV1PrivateUsertrusteddeviceLoginhistoryListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<UserLoginHistoryListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAuthV1PrivateUsertrusteddeviceLoginhistoryList.info(
      queryParams,
      configOverride,
    );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        Page: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetAuthV1PrivateUsertrusteddeviceLoginhistoryList.info = (
  queryParams?: GetAuthV1PrivateUsertrusteddeviceLoginhistoryListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAuthV1PrivateUsertrusteddeviceLoginhistoryList.key,

      queryParams,
    ] as QueryKey,
    fun: (
      _param?: Partial<GetAuthV1PrivateUsertrusteddeviceLoginhistoryListQueryParams>,
    ) =>
      getAuthV1PrivateUsertrusteddeviceLoginhistoryList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetAuthV1PrivateUsertrusteddeviceLoginhistoryList.prefetch = (
  client: QueryClient,
  queryParams?: GetAuthV1PrivateUsertrusteddeviceLoginhistoryListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<UserLoginHistoryListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetAuthV1PrivateUsertrusteddeviceLoginhistoryList.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetAuthV1PublicAuthIsphonenumberregistered = (
  queryParams?: GetAuthV1PublicAuthIsphonenumberregisteredQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<boolean>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PublicAuthIsphonenumberregistered.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetAuthV1PublicAuthIsphonenumberregistered.info = (
  queryParams?: GetAuthV1PublicAuthIsphonenumberregisteredQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getAuthV1PublicAuthIsphonenumberregistered.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getAuthV1PublicAuthIsphonenumberregistered(
        queryParams,

        configOverride,
      ),
  };
};
useGetAuthV1PublicAuthIsphonenumberregistered.prefetch = (
  client: QueryClient,
  queryParams?: GetAuthV1PublicAuthIsphonenumberregisteredQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<boolean>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetAuthV1PublicAuthIsphonenumberregistered.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetBaseinfoV1PublicCityList = (
  queryParams?: GetBaseinfoV1PublicCityListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<CityResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetBaseinfoV1PublicCityList.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetBaseinfoV1PublicCityList.info = (
  queryParams?: GetBaseinfoV1PublicCityListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getBaseinfoV1PublicCityList.key, queryParams] as QueryKey,
    fun: () =>
      getBaseinfoV1PublicCityList(
        queryParams,

        configOverride,
      ),
  };
};
useGetBaseinfoV1PublicCityList.prefetch = (
  client: QueryClient,
  queryParams?: GetBaseinfoV1PublicCityListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<CityResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetBaseinfoV1PublicCityList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetBaseinfoV1PublicCountryAll = (
  queryParams?: GetBaseinfoV1PublicCountryAllQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<CountryResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetBaseinfoV1PublicCountryAll.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetBaseinfoV1PublicCountryAll.info = (
  queryParams?: GetBaseinfoV1PublicCountryAllQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getBaseinfoV1PublicCountryAll.key, queryParams] as QueryKey,
    fun: () =>
      getBaseinfoV1PublicCountryAll(
        queryParams,

        configOverride,
      ),
  };
};
useGetBaseinfoV1PublicCountryAll.prefetch = (
  client: QueryClient,
  queryParams?: GetBaseinfoV1PublicCountryAllQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<CountryResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetBaseinfoV1PublicCountryAll.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetBaseinfoV1PublicProvinceList = (
  queryParams?: GetBaseinfoV1PublicProvinceListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<ProvinceResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetBaseinfoV1PublicProvinceList.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetBaseinfoV1PublicProvinceList.info = (
  queryParams?: GetBaseinfoV1PublicProvinceListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getBaseinfoV1PublicProvinceList.key, queryParams] as QueryKey,
    fun: () =>
      getBaseinfoV1PublicProvinceList(
        queryParams,

        configOverride,
      ),
  };
};
useGetBaseinfoV1PublicProvinceList.prefetch = (
  client: QueryClient,
  queryParams?: GetBaseinfoV1PublicProvinceListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<ProvinceResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetBaseinfoV1PublicProvinceList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateDepositList = (
  queryParams?: GetCapitalV1PrivateDepositListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<DepositTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateDepositList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNumber: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetCapitalV1PrivateDepositList.info = (
  queryParams?: GetCapitalV1PrivateDepositListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateDepositList.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetCapitalV1PrivateDepositListQueryParams>) =>
      getCapitalV1PrivateDepositList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetCapitalV1PrivateDepositList.prefetch = (
  client: QueryClient,
  queryParams?: GetCapitalV1PrivateDepositListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<DepositTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateDepositList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateDepositRecent = (
  options?: SwaggerTypescriptUseQueryOptions<DepositTransactionHistoryListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateDepositRecent.info(configOverride);
  return useQuery(key, fun, options);
};
useGetCapitalV1PrivateDepositRecent.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateDepositRecent.key] as QueryKey,
    fun: () => getCapitalV1PrivateDepositRecent(configOverride),
  };
};
useGetCapitalV1PrivateDepositRecent.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<DepositTransactionHistoryListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateDepositRecent.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivatePosList = (
  queryParams?: GetCapitalV1PrivatePosListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<POSTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivatePosList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNumber: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetCapitalV1PrivatePosList.info = (
  queryParams?: GetCapitalV1PrivatePosListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivatePosList.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetCapitalV1PrivatePosListQueryParams>) =>
      getCapitalV1PrivatePosList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetCapitalV1PrivatePosList.prefetch = (
  client: QueryClient,
  queryParams?: GetCapitalV1PrivatePosListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<POSTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivatePosList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateSettlementList = (
  queryParams?: GetCapitalV1PrivateSettlementListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<SettlementTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateSettlementList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNumber: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetCapitalV1PrivateSettlementList.info = (
  queryParams?: GetCapitalV1PrivateSettlementListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateSettlementList.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetCapitalV1PrivateSettlementListQueryParams>) =>
      getCapitalV1PrivateSettlementList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetCapitalV1PrivateSettlementList.prefetch = (
  client: QueryClient,
  queryParams?: GetCapitalV1PrivateSettlementListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<SettlementTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateSettlementList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateWithdrawDetail = (
  queryParams?: GetCapitalV1PrivateWithdrawDetailQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<TransactionHistoryDetailResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateWithdrawDetail.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetCapitalV1PrivateWithdrawDetail.info = (
  queryParams?: GetCapitalV1PrivateWithdrawDetailQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateWithdrawDetail.key, queryParams] as QueryKey,
    fun: () =>
      getCapitalV1PrivateWithdrawDetail(
        queryParams,

        configOverride,
      ),
  };
};
useGetCapitalV1PrivateWithdrawDetail.prefetch = (
  client: QueryClient,
  queryParams?: GetCapitalV1PrivateWithdrawDetailQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<TransactionHistoryDetailResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateWithdrawDetail.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateWithdrawList = (
  queryParams?: GetCapitalV1PrivateWithdrawListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<WithdrawTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateWithdrawList.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNumber: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetCapitalV1PrivateWithdrawList.info = (
  queryParams?: GetCapitalV1PrivateWithdrawListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateWithdrawList.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetCapitalV1PrivateWithdrawListQueryParams>) =>
      getCapitalV1PrivateWithdrawList(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetCapitalV1PrivateWithdrawList.prefetch = (
  client: QueryClient,
  queryParams?: GetCapitalV1PrivateWithdrawListQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<WithdrawTransactionHistoryListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PrivateWithdrawList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateWithdrawRecent = (
  options?: SwaggerTypescriptUseQueryOptions<WithdrawTransactionHistoryListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetCapitalV1PrivateWithdrawRecent.info(configOverride);
  return useQuery(key, fun, options);
};
useGetCapitalV1PrivateWithdrawRecent.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateWithdrawRecent.key] as QueryKey,
    fun: () => getCapitalV1PrivateWithdrawRecent(configOverride),
  };
};
useGetCapitalV1PrivateWithdrawRecent.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<WithdrawTransactionHistoryListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetCapitalV1PrivateWithdrawRecent.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PrivateWithdrawTodaytotal = (
  options?: SwaggerTypescriptUseQueryOptions<TodayTotalWithdrawResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetCapitalV1PrivateWithdrawTodaytotal.info(configOverride);
  return useQuery(key, fun, options);
};
useGetCapitalV1PrivateWithdrawTodaytotal.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PrivateWithdrawTodaytotal.key] as QueryKey,
    fun: () => getCapitalV1PrivateWithdrawTodaytotal(configOverride),
  };
};
useGetCapitalV1PrivateWithdrawTodaytotal.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<TodayTotalWithdrawResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetCapitalV1PrivateWithdrawTodaytotal.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PublicCurrencyAll = (
  options?: SwaggerTypescriptUseQueryOptions<CurrencyResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PublicCurrencyAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetCapitalV1PublicCurrencyAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PublicCurrencyAll.key] as QueryKey,
    fun: () => getCapitalV1PublicCurrencyAll(configOverride),
  };
};
useGetCapitalV1PublicCurrencyAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<CurrencyResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetCapitalV1PublicCurrencyAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetCapitalV1PublicMoneynetworkAll = (
  options?: SwaggerTypescriptUseQueryOptions<MoneyNetworkResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetCapitalV1PublicMoneynetworkAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetCapitalV1PublicMoneynetworkAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getCapitalV1PublicMoneynetworkAll.key] as QueryKey,
    fun: () => getCapitalV1PublicMoneynetworkAll(configOverride),
  };
};
useGetCapitalV1PublicMoneynetworkAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<MoneyNetworkResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetCapitalV1PublicMoneynetworkAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetEngagementV1PrivateNotification = (
  queryParams?: GetEngagementV1PrivateNotificationQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<Notification2ListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetEngagementV1PrivateNotification.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetEngagementV1PrivateNotification.info = (
  queryParams?: GetEngagementV1PrivateNotificationQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getEngagementV1PrivateNotification.key, queryParams] as QueryKey,
    fun: () =>
      getEngagementV1PrivateNotification(
        queryParams,

        configOverride,
      ),
  };
};
useGetEngagementV1PrivateNotification.prefetch = (
  client: QueryClient,
  queryParams?: GetEngagementV1PrivateNotificationQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<Notification2ListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetEngagementV1PrivateNotification.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetEngagementV1PrivateNotificationCount = (
  options?: SwaggerTypescriptUseQueryOptions<
    NotificationCountByTypeResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetEngagementV1PrivateNotificationCount.info(configOverride);
  return useQuery(key, fun, options);
};
useGetEngagementV1PrivateNotificationCount.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getEngagementV1PrivateNotificationCount.key] as QueryKey,
    fun: () => getEngagementV1PrivateNotificationCount(configOverride),
  };
};
useGetEngagementV1PrivateNotificationCount.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<
    NotificationCountByTypeResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetEngagementV1PrivateNotificationCount.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateAllorderlist = (
  queryParams?: GetExchangeV1PrivateAllorderlistQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OcoOrderResultInfoResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateAllorderlist.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PrivateAllorderlist.info = (
  queryParams?: GetExchangeV1PrivateAllorderlistQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateAllorderlist.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PrivateAllorderlist(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateAllorderlist.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateAllorderlistQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OcoOrderResultInfoResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateAllorderlist.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateAllorders = (
  queryParams?: GetExchangeV1PrivateAllordersQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<OrderResultInfoListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateAllorders.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNo: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetExchangeV1PrivateAllorders.info = (
  queryParams?: GetExchangeV1PrivateAllordersQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateAllorders.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetExchangeV1PrivateAllordersQueryParams>) =>
      getExchangeV1PrivateAllorders(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateAllorders.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateAllordersQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<OrderResultInfoListResponseVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateAllorders.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateAlltrades = (
  queryParams?: GetExchangeV1PrivateAlltradesQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<TradeResposneListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateAlltrades.info(
    queryParams,
    configOverride,
  );
  const {
    data: { pages } = {},
    data,
    ...rest
  } = useInfiniteQuery(
    key,
    ({ pageParam = 1 }) =>
      fun({
        pageNo: pageParam,
      }),
    {
      getNextPageParam: (_lastPage, allPages) => allPages.length + 1,
      ...(options as any),
    },
  );

  const list = useMemo(() => paginationFlattenData(pages), [pages]);
  const total = getTotal(pages);

  const hasMore = useHasMore(pages, list, queryParams);

  return { ...rest, data, list, hasMore, total };
};
useGetExchangeV1PrivateAlltrades.info = (
  queryParams?: GetExchangeV1PrivateAlltradesQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateAlltrades.key, queryParams] as QueryKey,
    fun: (_param?: Partial<GetExchangeV1PrivateAlltradesQueryParams>) =>
      getExchangeV1PrivateAlltrades(
        {
          ..._param,
          ...queryParams,
        },

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateAlltrades.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateAlltradesQueryParams,
  options?: UseInfiniteQueryOptions<
    SwaggerResponse<TradeResposneListVM>,
    RequestError | Error
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateAlltrades.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateOpenocoorderlist = (
  queryParams?: GetExchangeV1PrivateOpenocoorderlistQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OcoOrderResultInfoResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOpenocoorderlist.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PrivateOpenocoorderlist.info = (
  queryParams?: GetExchangeV1PrivateOpenocoorderlistQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateOpenocoorderlist.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PrivateOpenocoorderlist(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateOpenocoorderlist.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateOpenocoorderlistQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OcoOrderResultInfoResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOpenocoorderlist.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateOpenorders = (
  queryParams?: GetExchangeV1PrivateOpenordersQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OrderResultInfoResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOpenorders.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PrivateOpenorders.info = (
  queryParams?: GetExchangeV1PrivateOpenordersQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateOpenorders.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PrivateOpenorders(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateOpenorders.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateOpenordersQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OrderResultInfoResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOpenorders.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateOrder = (
  queryParams?: GetExchangeV1PrivateOrderQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OrderFullInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOrder.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PrivateOrder.info = (
  queryParams?: GetExchangeV1PrivateOrderQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateOrder.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PrivateOrder(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateOrder.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateOrderQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OrderFullInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOrder.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateOrderlist = (
  queryParams?: GetExchangeV1PrivateOrderlistQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<GetOcoOrderResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOrderlist.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PrivateOrderlist.info = (
  queryParams?: GetExchangeV1PrivateOrderlistQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateOrderlist.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PrivateOrderlist(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PrivateOrderlist.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PrivateOrderlistQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<GetOcoOrderResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PrivateOrderlist.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PrivateUsertraderlevel = (
  options?: SwaggerTypescriptUseQueryOptions<UserTraderLevelResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetExchangeV1PrivateUsertraderlevel.info(configOverride);
  return useQuery(key, fun, options);
};
useGetExchangeV1PrivateUsertraderlevel.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PrivateUsertraderlevel.key] as QueryKey,
    fun: () => getExchangeV1PrivateUsertraderlevel(configOverride),
  };
};
useGetExchangeV1PrivateUsertraderlevel.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserTraderLevelResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetExchangeV1PrivateUsertraderlevel.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicAlltickers24hr = (
  options?: SwaggerTypescriptUseQueryOptions<MarketTickerPriceResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetExchangeV1PublicAlltickers24hr.info(configOverride);
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicAlltickers24hr.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicAlltickers24hr.key] as QueryKey,
    fun: () => getExchangeV1PublicAlltickers24hr(configOverride),
  };
};
useGetExchangeV1PublicAlltickers24hr.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<MarketTickerPriceResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetExchangeV1PublicAlltickers24hr.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicDepth = (
  queryParams?: GetExchangeV1PublicDepthQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OrderBookResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicDepth.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicDepth.info = (
  queryParams?: GetExchangeV1PublicDepthQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicDepth.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PublicDepth(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PublicDepth.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PublicDepthQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<OrderBookResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicDepth.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicDomaintraderlevels = (
  options?: SwaggerTypescriptUseQueryOptions<DomainTraderLevelResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetExchangeV1PublicDomaintraderlevels.info(configOverride);
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicDomaintraderlevels.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicDomaintraderlevels.key] as QueryKey,
    fun: () => getExchangeV1PublicDomaintraderlevels(configOverride),
  };
};
useGetExchangeV1PublicDomaintraderlevels.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<DomainTraderLevelResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetExchangeV1PublicDomaintraderlevels.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicKlines = (
  queryParams?: GetExchangeV1PublicKlinesQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<KlineDataResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicKlines.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicKlines.info = (
  queryParams?: GetExchangeV1PublicKlinesQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicKlines.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PublicKlines(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PublicKlines.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PublicKlinesQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<KlineDataResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicKlines.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicMarkets = (
  queryParams?: GetExchangeV1PublicMarketsQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<MarketResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicMarkets.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicMarkets.info = (
  queryParams?: GetExchangeV1PublicMarketsQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicMarkets.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PublicMarkets(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PublicMarkets.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PublicMarketsQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<MarketResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicMarkets.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicTicker24hr = (
  queryParams?: GetExchangeV1PublicTicker24hrQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<MarketTickerPriceResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicTicker24hr.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicTicker24hr.info = (
  queryParams?: GetExchangeV1PublicTicker24hrQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicTicker24hr.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PublicTicker24hr(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PublicTicker24hr.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PublicTicker24hrQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<MarketTickerPriceResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicTicker24hr.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetExchangeV1PublicTrades = (
  queryParams?: GetExchangeV1PublicTradesQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<RecentTradeResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicTrades.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetExchangeV1PublicTrades.info = (
  queryParams?: GetExchangeV1PublicTradesQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getExchangeV1PublicTrades.key, queryParams] as QueryKey,
    fun: () =>
      getExchangeV1PublicTrades(
        queryParams,

        configOverride,
      ),
  };
};
useGetExchangeV1PublicTrades.prefetch = (
  client: QueryClient,
  queryParams?: GetExchangeV1PublicTradesQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<RecentTradeResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetExchangeV1PublicTrades.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateDeviceAll = (
  options?: SwaggerTypescriptUseQueryOptions<UserTrustDeviceResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateDeviceAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateDeviceAll.info = (configOverride?: AxiosRequestConfig) => {
  return {
    key: [getPartyV1PrivateDeviceAll.key] as QueryKey,
    fun: () => getPartyV1PrivateDeviceAll(configOverride),
  };
};
useGetPartyV1PrivateDeviceAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserTrustDeviceResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateDeviceAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateDomainForcetwofa = (
  options?: SwaggerTypescriptUseQueryOptions<boolean>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateDomainForcetwofa.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateDomainForcetwofa.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateDomainForcetwofa.key] as QueryKey,
    fun: () => getPartyV1PrivateDomainForcetwofa(configOverride),
  };
};
useGetPartyV1PrivateDomainForcetwofa.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<boolean>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateDomainForcetwofa.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateDomainMultiwallet = (
  options?: SwaggerTypescriptUseQueryOptions<boolean>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateDomainMultiwallet.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateDomainMultiwallet.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateDomainMultiwallet.key] as QueryKey,
    fun: () => getPartyV1PrivateDomainMultiwallet(configOverride),
  };
};
useGetPartyV1PrivateDomainMultiwallet.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<boolean>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateDomainMultiwallet.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateDomainSetting = (
  options?: SwaggerTypescriptUseQueryOptions<DomainSettingVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateDomainSetting.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateDomainSetting.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateDomainSetting.key] as QueryKey,
    fun: () => getPartyV1PrivateDomainSetting(configOverride),
  };
};
useGetPartyV1PrivateDomainSetting.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<DomainSettingVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateDomainSetting.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateFavoritemarket = (
  queryParams?: GetPartyV1PrivateFavoritemarketQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<string[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateFavoritemarket.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateFavoritemarket.info = (
  queryParams?: GetPartyV1PrivateFavoritemarketQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateFavoritemarket.key, queryParams] as QueryKey,
    fun: () =>
      getPartyV1PrivateFavoritemarket(
        queryParams,

        configOverride,
      ),
  };
};
useGetPartyV1PrivateFavoritemarket.prefetch = (
  client: QueryClient,
  queryParams?: GetPartyV1PrivateFavoritemarketQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<string[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateFavoritemarket.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateIdentificationlevelInfo = (
  options?: SwaggerTypescriptUseQueryOptions<IdentificationLevel>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateIdentificationlevelInfo.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateIdentificationlevelInfo.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateIdentificationlevelInfo.key] as QueryKey,
    fun: () => getPartyV1PrivateIdentificationlevelInfo(configOverride),
  };
};
useGetPartyV1PrivateIdentificationlevelInfo.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<IdentificationLevel>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateIdentificationlevelInfo.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateIdentificationlevelUserInfo = (
  options?: SwaggerTypescriptUseQueryOptions<UserInfoVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateIdentificationlevelUserInfo.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateIdentificationlevelUserInfo.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateIdentificationlevelUserInfo.key] as QueryKey,
    fun: () => getPartyV1PrivateIdentificationlevelUserInfo(configOverride),
  };
};
useGetPartyV1PrivateIdentificationlevelUserInfo.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserInfoVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateIdentificationlevelUserInfo.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateNotificationAll = (
  queryParams?: GetPartyV1PrivateNotificationAllQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<NotificationListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateNotificationAll.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateNotificationAll.info = (
  queryParams?: GetPartyV1PrivateNotificationAllQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateNotificationAll.key, queryParams] as QueryKey,
    fun: () =>
      getPartyV1PrivateNotificationAll(
        queryParams,

        configOverride,
      ),
  };
};
useGetPartyV1PrivateNotificationAll.prefetch = (
  client: QueryClient,
  queryParams?: GetPartyV1PrivateNotificationAllQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<NotificationListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateNotificationAll.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateNotificationTypes = (
  options?: SwaggerTypescriptUseQueryOptions<
    NotificationTypesReadCountResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateNotificationTypes.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateNotificationTypes.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateNotificationTypes.key] as QueryKey,
    fun: () => getPartyV1PrivateNotificationTypes(configOverride),
  };
};
useGetPartyV1PrivateNotificationTypes.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<
    NotificationTypesReadCountResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateNotificationTypes.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivatePluginList = (
  queryParams?: GetPartyV1PrivatePluginListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserPluginResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivatePluginList.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPartyV1PrivatePluginList.info = (
  queryParams?: GetPartyV1PrivatePluginListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivatePluginList.key, queryParams] as QueryKey,
    fun: () =>
      getPartyV1PrivatePluginList(
        queryParams,

        configOverride,
      ),
  };
};
useGetPartyV1PrivatePluginList.prefetch = (
  client: QueryClient,
  queryParams?: GetPartyV1PrivatePluginListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserPluginResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivatePluginList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateUserByuserreferralprogramid = (
  queryParams?: GetPartyV1PrivateUserByuserreferralprogramidQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserReferralInfoVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateUserByuserreferralprogramid.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateUserByuserreferralprogramid.info = (
  queryParams?: GetPartyV1PrivateUserByuserreferralprogramidQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPartyV1PrivateUserByuserreferralprogramid.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPartyV1PrivateUserByuserreferralprogramid(
        queryParams,

        configOverride,
      ),
  };
};
useGetPartyV1PrivateUserByuserreferralprogramid.prefetch = (
  client: QueryClient,
  queryParams?: GetPartyV1PrivateUserByuserreferralprogramidQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserReferralInfoVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPartyV1PrivateUserByuserreferralprogramid.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateUsersettingPreference = (
  options?: SwaggerTypescriptUseQueryOptions<UserSettingPreferenseResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateUsersettingPreference.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateUsersettingPreference.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PrivateUsersettingPreference.key] as QueryKey,
    fun: () => getPartyV1PrivateUsersettingPreference(configOverride),
  };
};
useGetPartyV1PrivateUsersettingPreference.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserSettingPreferenseResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateUsersettingPreference.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PrivateWalletsettingMaxreferalprogrampercent = (
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateWalletsettingMaxreferalprogrampercent.info(
      configOverride,
    );
  return useQuery(key, fun, options);
};
useGetPartyV1PrivateWalletsettingMaxreferalprogrampercent.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPartyV1PrivateWalletsettingMaxreferalprogrampercent.key,
    ] as QueryKey,
    fun: () =>
      getPartyV1PrivateWalletsettingMaxreferalprogrampercent(configOverride),
  };
};
useGetPartyV1PrivateWalletsettingMaxreferalprogrampercent.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PrivateWalletsettingMaxreferalprogrampercent.info(
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPartyV1PublicIdentificationlevelGuide = (
  options?: SwaggerTypescriptUseQueryOptions<
    IdentificationLevelGuideResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PublicIdentificationlevelGuide.info(configOverride);
  return useQuery(key, fun, options);
};
useGetPartyV1PublicIdentificationlevelGuide.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPartyV1PublicIdentificationlevelGuide.key] as QueryKey,
    fun: () => getPartyV1PublicIdentificationlevelGuide(configOverride),
  };
};
useGetPartyV1PublicIdentificationlevelGuide.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<
    IdentificationLevelGuideResponseVM[]
  >,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPartyV1PublicIdentificationlevelGuide.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestCommission = (
  queryParams?: GetPaymentV1PrivateEpayrequestCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestCommission.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestCommission.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PrivateEpayrequestCommission.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestCommission(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestCommission.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestCommission.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestCount = (
  queryParams?: GetPaymentV1PrivateEpayrequestCountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestCountResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestCount.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestCount.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestCountQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPaymentV1PrivateEpayrequestCount.key, queryParams] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestCount(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestCount.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestCountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestCountResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestCount.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestCountFromme = (
  queryParams?: GetPaymentV1PrivateEpayrequestCountFrommeQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestCountResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestCountFromme.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestCountFromme.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestCountFrommeQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PrivateEpayrequestCountFromme.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestCountFromme(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestCountFromme.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestCountFrommeQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestCountResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestCountFromme.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestInfoClientuniqueid = (
  queryParams?: GetPaymentV1PrivateEpayrequestInfoClientuniqueidQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestInfoClientuniqueid.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestInfoClientuniqueid.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestInfoClientuniqueidQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PrivateEpayrequestInfoClientuniqueid.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestInfoClientuniqueid(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestInfoClientuniqueid.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestInfoClientuniqueidQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestInfoClientuniqueid.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestList = (
  queryParams?: GetPaymentV1PrivateEpayrequestListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestList.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestList.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPaymentV1PrivateEpayrequestList.key, queryParams] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestList(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestList.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestListFromme = (
  queryParams?: GetPaymentV1PrivateEpayrequestListFrommeQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestListFromme.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestListFromme.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestListFrommeQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PrivateEpayrequestListFromme.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestListFromme(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestListFromme.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestListFrommeQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestListFromme.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PrivateEpayrequestPluginCount = (
  queryParams?: GetPaymentV1PrivateEpayrequestPluginCountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestPluginCount.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PrivateEpayrequestPluginCount.info = (
  queryParams?: GetPaymentV1PrivateEpayrequestPluginCountQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PrivateEpayrequestPluginCount.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PrivateEpayrequestPluginCount(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PrivateEpayrequestPluginCount.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PrivateEpayrequestPluginCountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PrivateEpayrequestPluginCount.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PublicEpayrequestGetblockchainaddress = (
  queryParams?: GetPaymentV1PublicEpayrequestGetblockchainaddressQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<BlockchainAddressResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPaymentV1PublicEpayrequestGetblockchainaddress.info(
      queryParams,
      configOverride,
    );
  return useQuery(key, fun, options);
};
useGetPaymentV1PublicEpayrequestGetblockchainaddress.info = (
  queryParams?: GetPaymentV1PublicEpayrequestGetblockchainaddressQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PublicEpayrequestGetblockchainaddress.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PublicEpayrequestGetblockchainaddress(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PublicEpayrequestGetblockchainaddress.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PublicEpayrequestGetblockchainaddressQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<BlockchainAddressResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPaymentV1PublicEpayrequestGetblockchainaddress.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PublicEpayrequestInfoToken = (
  queryParams?: GetPaymentV1PublicEpayrequestInfoTokenQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PublicEpayrequestInfoToken.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PublicEpayrequestInfoToken.info = (
  queryParams?: GetPaymentV1PublicEpayrequestInfoTokenQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPaymentV1PublicEpayrequestInfoToken.key, queryParams] as QueryKey,
    fun: () =>
      getPaymentV1PublicEpayrequestInfoToken(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PublicEpayrequestInfoToken.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PublicEpayrequestInfoTokenQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EpayRequestInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PublicEpayrequestInfoToken.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PublicEpayrequestReceiptinfoClientuniqueid = (
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoClientuniqueidQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EPayRequestReceiptInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.info(
      queryParams,
      configOverride,
    );
  return useQuery(key, fun, options);
};
useGetPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.info = (
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoClientuniqueidQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PublicEpayrequestReceiptinfoClientuniqueid(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoClientuniqueidQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EPayRequestReceiptInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetPaymentV1PublicEpayrequestReceiptinfoClientuniqueid.info(
      queryParams,
      configOverride,
    );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PublicEpayrequestReceiptinfoToken = (
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoTokenQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EPayRequestReceiptInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PublicEpayrequestReceiptinfoToken.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PublicEpayrequestReceiptinfoToken.info = (
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoTokenQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getPaymentV1PublicEpayrequestReceiptinfoToken.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getPaymentV1PublicEpayrequestReceiptinfoToken(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PublicEpayrequestReceiptinfoToken.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PublicEpayrequestReceiptinfoTokenQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<EPayRequestReceiptInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PublicEpayrequestReceiptinfoToken.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetPaymentV1PublicEpayrequestSmsResend = (
  queryParams?: GetPaymentV1PublicEpayrequestSmsResendQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<any>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PublicEpayrequestSmsResend.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetPaymentV1PublicEpayrequestSmsResend.info = (
  queryParams?: GetPaymentV1PublicEpayrequestSmsResendQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getPaymentV1PublicEpayrequestSmsResend.key, queryParams] as QueryKey,
    fun: () =>
      getPaymentV1PublicEpayrequestSmsResend(
        queryParams,

        configOverride,
      ),
  };
};
useGetPaymentV1PublicEpayrequestSmsResend.prefetch = (
  client: QueryClient,
  queryParams?: GetPaymentV1PublicEpayrequestSmsResendQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<any>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetPaymentV1PublicEpayrequestSmsResend.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1Private = (
  queryParams?: GetSettlementV1PrivateQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<SettlementRequestInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1Private.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1Private.info = (
  queryParams?: GetSettlementV1PrivateQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1Private.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1Private(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1Private.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<SettlementRequestInfoResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1Private.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateAddressbook = (
  queryParams?: GetSettlementV1PrivateAddressbookQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<AddressBookResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateAddressbook.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateAddressbook.info = (
  queryParams?: GetSettlementV1PrivateAddressbookQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateAddressbook.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1PrivateAddressbook(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1PrivateAddressbook.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateAddressbookQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<AddressBookResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateAddressbook.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateAddressbookAll = (
  options?: SwaggerTypescriptUseQueryOptions<AddressBookResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetSettlementV1PrivateAddressbookAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateAddressbookAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateAddressbookAll.key] as QueryKey,
    fun: () => getSettlementV1PrivateAddressbookAll(configOverride),
  };
};
useGetSettlementV1PrivateAddressbookAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<AddressBookResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetSettlementV1PrivateAddressbookAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateCommission = (
  queryParams?: GetSettlementV1PrivateCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateCommission.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateCommission.info = (
  queryParams?: GetSettlementV1PrivateCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateCommission.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1PrivateCommission(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1PrivateCommission.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateCommission.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateCount = (
  queryParams?: GetSettlementV1PrivateCountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<AggregationResultResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateCount.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateCount.info = (
  queryParams?: GetSettlementV1PrivateCountQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateCount.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1PrivateCount(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1PrivateCount.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateCountQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<AggregationResultResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateCount.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateGlobalwalletproviderAll = (
  options?: SwaggerTypescriptUseQueryOptions<GlobalWalletProviderResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetSettlementV1PrivateGlobalwalletproviderAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateGlobalwalletproviderAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateGlobalwalletproviderAll.key] as QueryKey,
    fun: () => getSettlementV1PrivateGlobalwalletproviderAll(configOverride),
  };
};
useGetSettlementV1PrivateGlobalwalletproviderAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<GlobalWalletProviderResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetSettlementV1PrivateGlobalwalletproviderAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateList = (
  queryParams?: GetSettlementV1PrivateListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<SettlementRequestInfoListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateList.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateList.info = (
  queryParams?: GetSettlementV1PrivateListQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateList.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1PrivateList(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1PrivateList.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateListQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<SettlementRequestInfoListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateList.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateReport = (
  queryParams?: GetSettlementV1PrivateReportQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<ReportResultResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateReport.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateReport.info = (
  queryParams?: GetSettlementV1PrivateReportQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateReport.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1PrivateReport(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1PrivateReport.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateReportQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<ReportResultResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateReport.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetSettlementV1PrivateSubuser = (
  queryParams?: GetSettlementV1PrivateSubuserQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<SettlementRequestInfoListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateSubuser.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetSettlementV1PrivateSubuser.info = (
  queryParams?: GetSettlementV1PrivateSubuserQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getSettlementV1PrivateSubuser.key, queryParams] as QueryKey,
    fun: () =>
      getSettlementV1PrivateSubuser(
        queryParams,

        configOverride,
      ),
  };
};
useGetSettlementV1PrivateSubuser.prefetch = (
  client: QueryClient,
  queryParams?: GetSettlementV1PrivateSubuserQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<SettlementRequestInfoListResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetSettlementV1PrivateSubuser.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetStorageV1PrivateFileDownload = (
  queryParams?: GetStorageV1PrivateFileDownloadQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<any>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetStorageV1PrivateFileDownload.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetStorageV1PrivateFileDownload.info = (
  queryParams?: GetStorageV1PrivateFileDownloadQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getStorageV1PrivateFileDownload.key, queryParams] as QueryKey,
    fun: () =>
      getStorageV1PrivateFileDownload(
        queryParams,

        configOverride,
      ),
  };
};
useGetStorageV1PrivateFileDownload.prefetch = (
  client: QueryClient,
  queryParams?: GetStorageV1PrivateFileDownloadQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<any>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetStorageV1PrivateFileDownload.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1Private = (
  queryParams?: GetWalletV1PrivateQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserWalletDisplayDetailResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1Private.info(queryParams, configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1Private.info = (
  queryParams?: GetWalletV1PrivateQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1Private.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1Private(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1Private.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserWalletDisplayDetailResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1Private.info(queryParams, configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateAll = (
  options?: SwaggerTypescriptUseQueryOptions<UserWalletDisplayResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateAll.info = (configOverride?: AxiosRequestConfig) => {
  return {
    key: [getWalletV1PrivateAll.key] as QueryKey,
    fun: () => getWalletV1PrivateAll(configOverride),
  };
};
useGetWalletV1PrivateAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserWalletDisplayResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateBankAll = (
  options?: SwaggerTypescriptUseQueryOptions<BanksResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateBankAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateBankAll.info = (configOverride?: AxiosRequestConfig) => {
  return {
    key: [getWalletV1PrivateBankAll.key] as QueryKey,
    fun: () => getWalletV1PrivateBankAll(configOverride),
  };
};
useGetWalletV1PrivateBankAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<BanksResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateBankAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateGrouptransferCommission = (
  queryParams?: GetWalletV1PrivateGrouptransferCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateGrouptransferCommission.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateGrouptransferCommission.info = (
  queryParams?: GetWalletV1PrivateGrouptransferCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getWalletV1PrivateGrouptransferCommission.key,

      queryParams,
    ] as QueryKey,
    fun: () =>
      getWalletV1PrivateGrouptransferCommission(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateGrouptransferCommission.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateGrouptransferCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateGrouptransferCommission.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateInternalwithdrawInfo = (
  queryParams?: GetWalletV1PrivateInternalwithdrawInfoQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<InternalWithdrawResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateInternalwithdrawInfo.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateInternalwithdrawInfo.info = (
  queryParams?: GetWalletV1PrivateInternalwithdrawInfoQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateInternalwithdrawInfo.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PrivateInternalwithdrawInfo(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateInternalwithdrawInfo.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateInternalwithdrawInfoQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<InternalWithdrawResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateInternalwithdrawInfo.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateSubuserAll = (
  queryParams?: GetWalletV1PrivateSubuserAllQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserMinimalResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateSubuserAll.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateSubuserAll.info = (
  queryParams?: GetWalletV1PrivateSubuserAllQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateSubuserAll.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PrivateSubuserAll(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateSubuserAll.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateSubuserAllQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserMinimalResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateSubuserAll.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateSubuserAssignable = (
  queryParams?: GetWalletV1PrivateSubuserAssignableQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserMinimalResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateSubuserAssignable.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateSubuserAssignable.info = (
  queryParams?: GetWalletV1PrivateSubuserAssignableQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateSubuserAssignable.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PrivateSubuserAssignable(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateSubuserAssignable.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateSubuserAssignableQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserMinimalResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateSubuserAssignable.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateTransferCommission = (
  queryParams?: GetWalletV1PrivateTransferCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateTransferCommission.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateTransferCommission.info = (
  queryParams?: GetWalletV1PrivateTransferCommissionQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateTransferCommission.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PrivateTransferCommission(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateTransferCommission.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateTransferCommissionQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<number>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateTransferCommission.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserassetAll = (
  options?: SwaggerTypescriptUseQueryOptions<UserAssetResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserassetAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserassetAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserassetAll.key] as QueryKey,
    fun: () => getWalletV1PrivateUserassetAll(configOverride),
  };
};
useGetWalletV1PrivateUserassetAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserAssetResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserassetAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserassetSpotDefault = (
  queryParams?: GetWalletV1PrivateUserassetSpotDefaultQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserCurrencyResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserassetSpotDefault.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserassetSpotDefault.info = (
  queryParams?: GetWalletV1PrivateUserassetSpotDefaultQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserassetSpotDefault.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PrivateUserassetSpotDefault(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateUserassetSpotDefault.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateUserassetSpotDefaultQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<UserCurrencyResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserassetSpotDefault.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserassetSpotDefaultAll = (
  options?: SwaggerTypescriptUseQueryOptions<UserAssetResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetWalletV1PrivateUserassetSpotDefaultAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserassetSpotDefaultAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserassetSpotDefaultAll.key] as QueryKey,
    fun: () => getWalletV1PrivateUserassetSpotDefaultAll(configOverride),
  };
};
useGetWalletV1PrivateUserassetSpotDefaultAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserAssetResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetWalletV1PrivateUserassetSpotDefaultAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserbankAll = (
  options?: SwaggerTypescriptUseQueryOptions<UserBankResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserbankAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserbankAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserbankAll.key] as QueryKey,
    fun: () => getWalletV1PrivateUserbankAll(configOverride),
  };
};
useGetWalletV1PrivateUserbankAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserBankResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserbankAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank =
  (
    options?: SwaggerTypescriptUseQueryOptions<boolean>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.info(
        configOverride,
      );
    return useQuery(key, fun, options);
  };
useGetWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [
      getWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.key,
    ] as QueryKey,
    fun: () =>
      getWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank(
        configOverride,
      ),
  };
};
useGetWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.prefetch =
  (
    client: QueryClient,
    options?: SwaggerTypescriptUseQueryOptions<boolean>,
    configOverride?: AxiosRequestConfig,
  ) => {
    const { key, fun } =
      useGetWalletV1PrivateUserbankHascurrentuserapprovedorpenddinguserbank.info(
        configOverride,
      );

    return client.getQueryData(key)
      ? Promise.resolve()
      : client.prefetchQuery(key, () => fun(), options);
  };
export const useGetWalletV1PrivateUserbankStatus = (
  queryParams?: GetWalletV1PrivateUserbankStatusQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<IdentityStatus>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserbankStatus.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserbankStatus.info = (
  queryParams?: GetWalletV1PrivateUserbankStatusQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserbankStatus.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PrivateUserbankStatus(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PrivateUserbankStatus.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PrivateUserbankStatusQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<IdentityStatus>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PrivateUserbankStatus.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserreferralprogramAll = (
  options?: SwaggerTypescriptUseQueryOptions<UserReferralProgramVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetWalletV1PrivateUserreferralprogramAll.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserreferralprogramAll.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserreferralprogramAll.key] as QueryKey,
    fun: () => getWalletV1PrivateUserreferralprogramAll(configOverride),
  };
};
useGetWalletV1PrivateUserreferralprogramAll.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserReferralProgramVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetWalletV1PrivateUserreferralprogramAll.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PrivateUserreferralprogramDefault = (
  options?: SwaggerTypescriptUseQueryOptions<UserReferralProgramVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetWalletV1PrivateUserreferralprogramDefault.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PrivateUserreferralprogramDefault.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PrivateUserreferralprogramDefault.key] as QueryKey,
    fun: () => getWalletV1PrivateUserreferralprogramDefault(configOverride),
  };
};
useGetWalletV1PrivateUserreferralprogramDefault.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<UserReferralProgramVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } =
    useGetWalletV1PrivateUserreferralprogramDefault.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PublicCurrencyInfo = (
  options?: SwaggerTypescriptUseQueryOptions<DomainCurrencyResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PublicCurrencyInfo.info(configOverride);
  return useQuery(key, fun, options);
};
useGetWalletV1PublicCurrencyInfo.info = (
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PublicCurrencyInfo.key] as QueryKey,
    fun: () => getWalletV1PublicCurrencyInfo(configOverride),
  };
};
useGetWalletV1PublicCurrencyInfo.prefetch = (
  client: QueryClient,
  options?: SwaggerTypescriptUseQueryOptions<DomainCurrencyResponseVM[]>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PublicCurrencyInfo.info(configOverride);

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const useGetWalletV1PublicFind = (
  queryParams?: GetWalletV1PublicFindQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<FindUserWalletResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PublicFind.info(
    queryParams,
    configOverride,
  );
  return useQuery(key, fun, options);
};
useGetWalletV1PublicFind.info = (
  queryParams?: GetWalletV1PublicFindQueryParams,
  configOverride?: AxiosRequestConfig,
) => {
  return {
    key: [getWalletV1PublicFind.key, queryParams] as QueryKey,
    fun: () =>
      getWalletV1PublicFind(
        queryParams,

        configOverride,
      ),
  };
};
useGetWalletV1PublicFind.prefetch = (
  client: QueryClient,
  queryParams?: GetWalletV1PublicFindQueryParams,
  options?: SwaggerTypescriptUseQueryOptions<FindUserWalletResponseVM>,
  configOverride?: AxiosRequestConfig,
) => {
  const { key, fun } = useGetWalletV1PublicFind.info(
    queryParams,
    configOverride,
  );

  return client.getQueryData(key)
    ? Promise.resolve()
    : client.prefetchQuery(key, () => fun(), options);
};
export const usePatchWalletV1Private = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UpdateUserWalletRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return patchWalletV1Private(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostApiCspreportLog = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptionsVoid<any, TExtra>,
) => {
  return useMutation((_o) => {
    const { configOverride } = _o || {};

    return postApiCspreportLog(configOverride);
  }, options);
};

export const usePostAuthV1PrivateApikey = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    ApiKeyAddResponseVM,
    { requestBody: ApiKeyAddRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PrivateApikey(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PrivateAuthDisabletwofactor = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    QrCodeResponseVM,
    {
      requestBody: ChangeTwoFactorRequestVM;
      headerParams?: { platformType: PlatformType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      headerParams,
      configOverride,
    } = _o || {};

    return postAuthV1PrivateAuthDisabletwofactor(
      requestBody,

      headerParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PrivateAuthEmail = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: NewEmailRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PrivateAuthEmail(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PrivateAuthEmailSendcode = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    {
      queryParams?: PostAuthV1PrivateAuthEmailSendcodeQueryParams;
      headerParams?: { purpose: PurposeType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, headerParams, configOverride } = _o || {};

    return postAuthV1PrivateAuthEmailSendcode(
      queryParams,
      headerParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PrivateAuthEnabletwofactor = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    QrCodeResponseVM,
    {
      requestBody: ChangeTwoFactorRequestVM;
      headerParams?: { platformType: PlatformType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      headerParams,
      configOverride,
    } = _o || {};

    return postAuthV1PrivateAuthEnabletwofactor(
      requestBody,

      headerParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PrivateAuthGeneratewebsocketusertoken = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptionsVoid<string, TExtra>,
) => {
  return useMutation((_o) => {
    const { configOverride } = _o || {};

    return postAuthV1PrivateAuthGeneratewebsocketusertoken(configOverride);
  }, options);
};

export const usePostAuthV1PrivateAuthGetcode = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    { headerParams?: { purpose: PurposeType } },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { headerParams, configOverride } = _o || {};

    return postAuthV1PrivateAuthGetcode(headerParams, configOverride);
  }, options);
};

export const usePostAuthV1PrivateAuthPhonecallSendcode = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    {
      queryParams?: PostAuthV1PrivateAuthPhonecallSendcodeQueryParams;
      headerParams?: { purpose: PurposeType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, headerParams, configOverride } = _o || {};

    return postAuthV1PrivateAuthPhonecallSendcode(
      queryParams,
      headerParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PrivateAuthRevoketoken = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: RevokeTokenRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PrivateAuthRevoketoken(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthAnonyverifysecure = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    { requestBody: VerifySecureRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PublicAuthAnonyverifysecure(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthChecktwofactorisenable = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    UserExistResponseVM,
    { queryParams?: PostAuthV1PublicAuthChecktwofactorisenableQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return postAuthV1PublicAuthChecktwofactorisenable(
      queryParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthConnectToken = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    TokenResponseVM,
    {
      requestBody: LoginModelRequestVM;
      headerParams?: { deviceId: string; platform: string };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      headerParams,
      configOverride,
    } = _o || {};

    return postAuthV1PublicAuthConnectToken(
      requestBody,

      headerParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthGetcaptcha = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptionsVoid<
    PuzzleModelResponseVM,
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { configOverride } = _o || {};

    return postAuthV1PublicAuthGetcaptcha(configOverride);
  }, options);
};

export const usePostAuthV1PublicAuthGetcode = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    {
      queryParams?: PostAuthV1PublicAuthGetcodeQueryParams;
      headerParams?: { purpose: PurposeType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, headerParams, configOverride } = _o || {};

    return postAuthV1PublicAuthGetcode(
      queryParams,
      headerParams,
      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthRegister = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    RegisterResponseVM,
    { requestBody: RegisterRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PublicAuthRegister(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthRegisterverify = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    { requestBody: VerifyUserPhoneNumberRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PublicAuthRegisterverify(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthSetuserbasicinfo = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UserBasicInfoRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PublicAuthSetuserbasicinfo(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostAuthV1PublicAuthValidatecaptcha = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    boolean,
    { requestBody: PuzzleSubmissionRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postAuthV1PublicAuthValidatecaptcha(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostCapitalV1PrivateDepositQueryuserdepositaddress = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    UserDepositAddressResponseVM,
    { requestBody: UserDepositAddressRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postCapitalV1PrivateDepositQueryuserdepositaddress(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostCapitalV1PrivateDepositQuerywalletdepositaddress = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    UserDepositAddressResponseVM,
    { requestBody: WalletDepositAddressRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postCapitalV1PrivateDepositQuerywalletdepositaddress(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostCapitalV1ProtectedWithdrawApply = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    CreateWithdrawRequestUserWalletResponseVM,
    { requestBody: WithdrawRequestUserWalletCreateRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postCapitalV1ProtectedWithdrawApply(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostExchangeV1PrivateOrder = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    OrderAckInfoResponseVM,
    { requestBody: PlaceOrderRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postExchangeV1PrivateOrder(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostExchangeV1PrivateOrderOco = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    OcoOrderResultInfoResponseVM,
    { requestBody: PlaceOcoOrderRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postExchangeV1PrivateOrderOco(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPartyV1PrivateFavoritemarket = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UpdateFavoriteMarketRequestVM[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPartyV1PrivateFavoritemarket(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPartyV1PrivateIdentificationlevelLevelthree = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UserIdentificationLevelThreeRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPartyV1PrivateIdentificationlevelLevelthree(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPartyV1PrivateIdentificationlevelLeveltwo = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UserIdentificationLevelTwoRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPartyV1PrivateIdentificationlevelLeveltwo(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPartyV1PrivateUserProfileimage = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    {
      requestBody: {
        /** - Format: binary */
        file: string;
      };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPartyV1PrivateUserProfileimage(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestCharge = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestResponseVM,
    { requestBody: CreateChargeRequestRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestCharge(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestDivideipg = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestResponseVM,
    { requestBody: CreateDivideIpgRequestRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestDivideipg(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestDividelink = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestResponseVM,
    { requestBody: CreateDivideLinkRequestRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestDividelink(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestIpg = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestResponseVM,
    { requestBody: CreateIpgRequestRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestIpg(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestLink = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestResponseVM,
    { requestBody: CreateLinkRequestRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestLink(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestPaywithwallet = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: EpayPayWithWalletRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestPaywithwallet(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestPostactioninternaldepositepayrequest =
  <TExtra>(
    options?: SwaggerTypescriptUseMutationOptions<
      AddPostActionResponseVM,
      { requestBody: AddPostActionInternalDepositEPayRequestRequestVM },
      TExtra
    >,
  ) => {
    return useMutation((_o) => {
      const {
        requestBody,

        configOverride,
      } = _o || {};

      return postPaymentV1PrivateEpayrequestPostactioninternaldepositepayrequest(
        requestBody,

        configOverride,
      );
    }, options);
  };

export const usePostPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder = <
  TExtra,
>(
  options?: SwaggerTypescriptUseMutationOptions<
    AddPostActionResponseVM,
    { requestBody: AddPostActionPlaceMarketBuyOrderRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestPostactionplacemarketbuyorder(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestSetpayercurrenyinfo = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: PayerCurrencyRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PrivateEpayrequestSetpayercurrenyinfo(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostPaymentV1PrivateEpayrequestUnblock = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: PostPaymentV1PrivateEpayrequestUnblockQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return postPaymentV1PrivateEpayrequestUnblock(queryParams, configOverride);
  }, options);
};

export const usePostPaymentV1PublicEpayrequestPos = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestResponseVM,
    { requestBody: CreatePosRequestRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postPaymentV1PublicEpayrequestPos(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostSettlementV1PrivateAddressbook = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: AddressBookAddRequestVM[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postSettlementV1PrivateAddressbook(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostSettlementV1PrivateExcel = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    SettlementExcelResponseVM[],
    { requestBody: SettlementFilterRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postSettlementV1PrivateExcel(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostSettlementV1PrivateUserWalletNumber = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    SettlementRequestInfoResponseVM,
    { userWalletNumber: string; requestBody: CreateSettlementRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      userWalletNumber,
      requestBody,

      configOverride,
    } = _o || {};

    return postSettlementV1PrivateUserWalletNumber(
      userWalletNumber,
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostStorageV1PrivateFileUploadfile = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    string,
    {
      requestBody: {
        /** - Format: binary */
        file: string;
      };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postStorageV1PrivateFileUploadfile(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1Private = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    UserWalletResponseVM,
    { requestBody: CreateUserWalletRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1Private(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1PrivateGrouptransfer = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    GroupTransferResponseVM,
    { requestBody: GroupTransferMoneyRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1PrivateGrouptransfer(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1PrivateTransfer = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    TransferMoneyResponseVM,
    { requestBody: TransferMoneyRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1PrivateTransfer(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1PrivateUserbank = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: CreateUserBankRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1PrivateUserbank(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1PrivateUserbankDetailed = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: CreateUserBankDetailRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1PrivateUserbankDetailed(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1PrivateUserreferralprogram = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UserReferralProgramAddVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1PrivateUserreferralprogram(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePostWalletV1PrivateWalletpermission = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: SubuserAccessRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return postWalletV1PrivateWalletpermission(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutAuthV1PrivateApikey = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: ApiKeyUpdateRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putAuthV1PrivateApikey(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutAuthV1PrivateAuthEmail = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: ChangeEmailRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putAuthV1PrivateAuthEmail(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutAuthV1ProtectAuthChangepassword = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    {
      requestBody: ChangePasswordRequestVM;
      headerParams?: { platformType: PlatformType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      headerParams,
      configOverride,
    } = _o || {};

    return putAuthV1ProtectAuthChangepassword(
      requestBody,

      headerParams,
      configOverride,
    );
  }, options);
};

export const usePutAuthV1PublicAuthForgotpassword = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    {
      requestBody: ForgotPasswordRequestVM;
      headerParams?: { platformType: PlatformType };
    },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      headerParams,
      configOverride,
    } = _o || {};

    return putAuthV1PublicAuthForgotpassword(
      requestBody,

      headerParams,
      configOverride,
    );
  }, options);
};

export const usePutEngagementV1PrivateNotificationRead = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: number[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putEngagementV1PrivateNotificationRead(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutEngagementV1PrivateNotificationReadall = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: PutEngagementV1PrivateNotificationReadallQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return putEngagementV1PrivateNotificationReadall(
      queryParams,
      configOverride,
    );
  }, options);
};

export const usePutPartyV1PrivateNotificationRead = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: number[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putPartyV1PrivateNotificationRead(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutPartyV1PrivateNotificationReadall = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptionsVoid<any, TExtra>,
) => {
  return useMutation((_o) => {
    const { configOverride } = _o || {};

    return putPartyV1PrivateNotificationReadall(configOverride);
  }, options);
};

export const usePutPartyV1PrivatePlugin = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: UserPluginTogggleRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putPartyV1PrivatePlugin(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutPartyV1PrivateUsersettingPreference = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: PreferenceUserSettingRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putPartyV1PrivateUsersettingPreference(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutPaymentV1PrivateEpayrequestAssigneduser = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestInfoResponseVM,
    { requestBody: UpdateEpayRequestAssignedUserRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putPaymentV1PrivateEpayrequestAssigneduser(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutPaymentV1PublicEpayrequestCancel = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: PutPaymentV1PublicEpayrequestCancelQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return putPaymentV1PublicEpayrequestCancel(queryParams, configOverride);
  }, options);
};

export const usePutPaymentV1PublicEpayrequestCustomdata = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    EpayRequestInfoResponseVM,
    { requestBody: UpdateEpayRequestCustomDataRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putPaymentV1PublicEpayrequestCustomdata(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutSettlementV1PrivateAddressbookWhitelistDisable = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: number[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putSettlementV1PrivateAddressbookWhitelistDisable(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutSettlementV1PrivateAddressbookWhitelistEnable = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: number[] },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putSettlementV1PrivateAddressbookWhitelistEnable(
      requestBody,

      configOverride,
    );
  }, options);
};

export const usePutWalletV1PrivateUserreferralprogramDefault = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { queryParams?: PutWalletV1PrivateUserreferralprogramDefaultQueryParams },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const { queryParams, configOverride } = _o || {};

    return putWalletV1PrivateUserreferralprogramDefault(
      queryParams,
      configOverride,
    );
  }, options);
};

export const usePutWalletV1PrivateWalletpermission = <TExtra>(
  options?: SwaggerTypescriptUseMutationOptions<
    any,
    { requestBody: PermissionRequestVM },
    TExtra
  >,
) => {
  return useMutation((_o) => {
    const {
      requestBody,

      configOverride,
    } = _o || {};

    return putWalletV1PrivateWalletpermission(
      requestBody,

      configOverride,
    );
  }, options);
};
