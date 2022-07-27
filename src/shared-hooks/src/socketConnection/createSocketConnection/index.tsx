import { HubConnectionState } from "@microsoft/signalr";
import { createContext, useContext, useEffect } from "react";
import { createSignalRContext } from "react-signalr";
import { Context } from "react-signalr/lib/signalr/types";
import { getSignalRBaseUrl } from "shared-constants";

type MessageEvent = {
  stream: string;
  data: any;
};

export const createSocketConnection = <T extends string>(
  events: Partial<T[]>,
) => {
  if (typeof window === "undefined") {
    return {
      Provider: ({ children }: { children: any }) => children,
      useEvent: () => null,
      SocketConnection: {} as Context<any>,
    };
  }

  const _events = new Map<T, "subscribed" | "notSubscribed">([]);
  const SocketConnection = createSignalRContext({
    // key: "socket",
    shareConnectionBetweenTab: false,
  });

  const HasProviderContext = createContext(false);

  const Provider = ({ children }: { children: any }) => {
    useEffect(() => {
      return () => {
        _events.clear();
      };
    }, []);

    return (
      <HasProviderContext.Provider value={true}>
        <SocketConnection.Provider
          url={`${getSignalRBaseUrl()}`}
          onOpen={() => {
            if (
              SocketConnection.connection?.state ===
              HubConnectionState.Connected
            ) {
              if (__DEV__) {
                SocketConnection.connection.keepAliveIntervalInMilliseconds = 120000;
              }

              SocketConnection.connection?.invoke("SUBSCRIBE", [
                ...events,
                ...Array.from(_events.keys()),
              ]);
            }
          }}
          onBeforeClose={() => {
            if (
              SocketConnection.connection?.state ===
              HubConnectionState.Connected
            ) {
              SocketConnection.connection?.invoke("UNSUBSCRIBE", [
                ...events,
                ...Array.from(_events.keys()),
              ]);
            }
          }}
          onError={async (error) => {
            console.log("custom error", error);
          }}
          onReconnect={() => {
            if (
              SocketConnection.connection?.state ===
              HubConnectionState.Connected
            ) {
              SocketConnection.connection?.invoke("SUBSCRIBE", [
                ...events,
                ...Array.from(_events.keys()),
              ]);
            }
          }}
          dependencies={[]}
        >
          {children}
        </SocketConnection.Provider>
      </HasProviderContext.Provider>
    );
  };

  const ProviderContainer = ({ children }: { children: any }) => {
    const hasProvider = useContext(HasProviderContext);

    return hasProvider ? children : <Provider>{children}</Provider>;
  };

  const useEvent = (
    event: T,
    callback: (message: any) => void,
    { enabled = true }: { enabled?: boolean } = {},
  ) => {
    useEffect(() => {
      let timeout: any;
      if (enabled) {
        timeout = setInterval(() => {
          if (events.includes(event)) {
            return;
          }
          if (
            SocketConnection.connection?.state ===
              HubConnectionState.Connected &&
            _events.get(event) !== "subscribed"
          ) {
            clearInterval(timeout);
            if (__DEV__) {
              SocketConnection.connection.keepAliveIntervalInMilliseconds = 120000;
            }
            SocketConnection.connection?.invoke("SUBSCRIBE", [event]);
            _events.set(event, "subscribed");
          } else {
            _events.set(event, "notSubscribed");
          }
        }, 1000);
      }

      return () => {
        clearInterval(timeout);

        if (
          SocketConnection.connection?.state === HubConnectionState.Connected &&
          _events.has(event)
        ) {
          SocketConnection.connection.invoke("UNSUBSCRIBE", [event]);
          _events.delete(event);
        }
      };
    }, [event, enabled]);

    SocketConnection.useSignalREffect(
      event,
      (message: MessageEvent) => {
        callback(message);
      },
      [event, enabled],
    );
  };

  return {
    SocketConnection,
    useEvent,
    Provider: ProviderContainer,
  };
};
