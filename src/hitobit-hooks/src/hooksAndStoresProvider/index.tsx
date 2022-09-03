import { MessageHeaders } from "@microsoft/signalr";
import { initializeI18n } from "hitobit-modules";
import { getAxiosInstance } from "hitobit-services";
import {
  AuthenticationProvider,
  BaseCurrencyStoreProvider,
  SelectedSymbolStoreProvider,
  setStoredAuthentication,
  setStoredBaseCurrency,
  setStoredSeletedSymbol,
} from "hitobit-store";
import { Fragment, lazy, ReactNode, useEffect } from "react";
import { QueryClientProvider, useQuery } from "react-query";
import { kline } from "../kline";
import { queryClient } from "../queryClient";
import { UserSignalRConnectionProvider } from "../userSignalRConnection";

const UserManagerProvider = lazy(
  () => import("hitobit-services/dist/context/userManager"),
);

type Resource = Record<string, string>;
export interface ProvidersProps {
  children: ReactNode;
  fallback?: ReactNode;
  initializer?: () => Promise<void>;
  language?: "fa" | "en";
  i18nResources?: {
    fa: Resource;
    en: Resource;
  };
  userSignalRDependencies?: any[];
  customRequestHeaders?: Record<string, string>;
  userSignalRHeaders?: MessageHeaders;
}
const HitobitClientProvider = ({
  children,
  initializer,
  language,
  i18nResources,
  fallback,
  userSignalRDependencies,
  userSignalRHeaders,
  customRequestHeaders,
}: ProvidersProps) => {
  const MaybeUserManagerProvider =
    typeof window === "undefined" ? Fragment : UserManagerProvider;

  useEffect(() => {
    if (customRequestHeaders) {
      const axiosInstance = getAxiosInstance(undefined);
      axiosInstance.defaults.headers.common = {
        ...axiosInstance.defaults.headers.common,
        ...customRequestHeaders,
      };
    }
  }, [customRequestHeaders]);

  return (
    <MaybeUserManagerProvider>
      <QueryClientProvider client={queryClient}>
        <AuthenticationProvider>
          <BaseCurrencyStoreProvider>
            <SelectedSymbolStoreProvider>
              <UserSignalRConnectionProvider
                dependencies={userSignalRDependencies}
                headers={userSignalRHeaders}
              >
                <kline.Provider>
                  <Child
                    {...{ initializer, language, i18nResources, fallback }}
                  >
                    {children}
                  </Child>
                </kline.Provider>
              </UserSignalRConnectionProvider>
            </SelectedSymbolStoreProvider>
          </BaseCurrencyStoreProvider>
        </AuthenticationProvider>
      </QueryClientProvider>
    </MaybeUserManagerProvider>
  );
};

const ChildInitialSymbol = Symbol();

const Child = ({
  children,
  initializer,
  language,
  i18nResources,
  fallback = null,
}: ProvidersProps) => {
  const { data } = useQuery(
    [ChildInitialSymbol],
    async () => {
      await setStoredAuthentication();
      await setStoredSeletedSymbol();
      await setStoredBaseCurrency();
      initializeI18n(language, i18nResources);
      await initializer?.();
      return true;
    },
    {
      staleTime: Infinity,
    },
  );

  return <>{data || typeof window === "undefined" ? children : fallback}</>;
};

export { HitobitClientProvider };
