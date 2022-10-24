export type RealtimeResponse = {
  type: 'error' | 'event' | 'connected' | 'response';
  data: RealtimeResponseAuthenticated | RealtimeResponseConnected | RealtimeResponseError | RealtimeResponseEvent<unknown>;
};

export type RealtimeRequest = {
  type: 'authentication';
  data: RealtimeRequestAuthenticate;
};

export type RealtimeResponseEvent<T extends unknown> = {
  events: string[];
  channels: string[];
  timestamp: number;
  payload: T;
};

export type RealtimeResponseError = {
  code: number;
  message: string;
};

export type RealtimeResponseConnected = {
  channels: string[];
  user?: object;
};

export type RealtimeResponseAuthenticated = {
  to: string;
  success: boolean;
  user: object;
};

export type RealtimeRequestAuthenticate = {
  session: string;
};

export type Realtime = {
  socket?: WebSocket;
  timeout?: number;
  url?: string;
  lastMessage?: RealtimeResponse;
  channels: Set<string>;
  subscriptions: Map<
    number,
    {
      channels: string[];
      callback: (payload: RealtimeResponseEvent<any>) => void;
    }
  >;
  subscriptionsCounter: number;
  reconnect: boolean;
  reconnectAttempts: number;
  getTimeout: () => number;
  connect: () => void;
  createSocket: () => void;
  cleanUp: (channels: string[]) => void;
  onMessage: (event: MessageEvent) => void;
};
