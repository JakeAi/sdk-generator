import { Inject, Injectable } from '@angular/core';
import { Realtime, RealtimeRequest, RealtimeResponse, RealtimeResponseConnected, RealtimeResponseError, RealtimeResponseEvent } from '@appwrite/common';
import { APPWRITE_LOCATION_PROVIDER_TOKEN } from '../tokens';
import { AppwriteService } from './';

@Injectable()
export class AppwriteRealtimeService {
  socket = undefined;
  timeout = undefined;
  url = '';
  channels = new Set();
  subscriptions = new Map();
  subscriptionsCounter = 0;
  reconnect = true;
  reconnectAttempts = 0;
  lastMessage = undefined;
  private realtime: Realtime;

  constructor(@Inject(APPWRITE_LOCATION_PROVIDER_TOKEN) public locationProvider, private appwriteService: AppwriteService) {}

  connect() {
    clearTimeout(this.realtime.timeout);
    this.realtime.timeout = window?.setTimeout(() => this.realtime.createSocket(), 50);
  }

  getTimeout() {
    switch (true) {
      case this.realtime.reconnectAttempts < 5:
        return 1000;
      case this.realtime.reconnectAttempts < 15:
        return 5000;
      case this.realtime.reconnectAttempts < 100:
        return 10_000;
      default:
        return 60_000;
    }
  }

  createSocket() {
    if (this.realtime.channels.size < 1) return;

    const channels = new URLSearchParams();
    channels.set('project', this.appwriteService.config.project);
    this.realtime.channels.forEach((channel) => {
      channels.append('channels[]', channel);
    });

    const url = this.appwriteService.config.endpointRealtime + '/realtime?' + channels.toString();

    if (
      url !== this.realtime.url || // Check if URL is present
      !this.realtime.socket || // Check if WebSocket has not been created
      this.realtime.socket?.readyState > WebSocket.OPEN // Check if WebSocket is CLOSING (3) or CLOSED (4)
    ) {
      if (
        this.realtime.socket &&
        this.realtime.socket?.readyState < WebSocket.CLOSING // Close WebSocket if it is CONNECTING (0) or OPEN (1)
      ) {
        this.realtime.reconnect = false;
        this.realtime.socket.close();
      }

      this.realtime.url = url;
      this.realtime.socket = new WebSocket(url);
      this.realtime.socket.addEventListener('message', this.realtime.onMessage);
      this.realtime.socket.addEventListener('open', (_event) => {
        this.realtime.reconnectAttempts = 0;
      });
      this.realtime.socket.addEventListener('close', (event) => {
        if (
          !this.realtime.reconnect ||
          (this.realtime?.lastMessage?.type === 'error' && // Check if last message was of type error
            (<RealtimeResponseError>this.realtime?.lastMessage.data).code === 1008) // Check for policy violation 1008
        ) {
          this.realtime.reconnect = true;
          return;
        }

        const timeout = this.realtime.getTimeout();
        console.error(`Realtime got disconnected. Reconnect will be attempted in ${timeout / 1000} seconds.`, event.reason);

        setTimeout(() => {
          this.realtime.reconnectAttempts++;
          this.realtime.createSocket();
        }, timeout);
      });
    }
  }

  onMessage(event) {
    try {
      const message: RealtimeResponse = JSON.parse(event.data);
      this.realtime.lastMessage = message;
      switch (message.type) {
        case 'connected': {
          const cookie = JSON.parse(window.localStorage.getItem('cookieFallback') ?? '{}');
          const session = cookie?.[`a_session_${this.appwriteService.config.project}`];
          const messageData = <RealtimeResponseConnected>message.data;

          if (session && !messageData.user) {
            this.realtime.socket?.send(
              JSON.stringify(<RealtimeRequest>{
                type: 'authentication',
                data: {
                  session,
                },
              })
            );
          }
          break;
        }
        case 'event': {
          const data = <RealtimeResponseEvent<unknown>>message.data;
          if (data?.channels) {
            const isSubscribed = data.channels.some((channel) => this.realtime.channels.has(channel));
            if (!isSubscribed) return;
            this.realtime.subscriptions.forEach((subscription) => {
              if (data.channels.some((channel) => subscription.channels.includes(channel))) {
                setTimeout(() => subscription.callback(data));
              }
            });
          }
          break;
        }
        case 'error':
          throw message.data;
        default:
          break;
      }
    } catch (e) {
      console.error(e);
    }
  }

  cleanUp(channels) {
    this.realtime.channels.forEach((channel) => {
      if (channels.includes(channel)) {
        const found = Array.from(this.realtime.subscriptions).some(([_key, subscription]) => {
          return subscription.channels.includes(channel);
        });

        if (!found) {
          this.realtime.channels.delete(channel);
        }
      }
    });
  }

  /**
   * Subscribes to Appwrite events and passes you the payload in realtime.
   *
   * @param {string|string[]} channels
   * Channel to subscribe - pass a single channel as a string or multiple with an array of strings.
   *
   * Possible channels are:
   * - account
   * - collections
   * - collections.[ID]
   * - collections.[ID].documents
   * - documents
   * - documents.[ID]
   * - files
   * - files.[ID]
   * - executions
   * - executions.[ID]
   * - functions.[ID]
   * - teams
   * - teams.[ID]
   * - memberships
   * - memberships.[ID]
   * @param {(payload: RealtimeMessage) => void} callback Is called on every realtime update.
   * @returns {() => void} Unsubscribes from events.
   */
  subscribe<T>(channels: string | string[], callback: (payload: RealtimeResponseEvent<T>) => void): () => void {
    const channelArray = typeof channels === 'string' ? [channels] : channels;
    channelArray.forEach((channel) => this.realtime.channels.add(channel));

    const counter = this.realtime.subscriptionsCounter++;
    this.realtime.subscriptions.set(counter, {
      channels: channelArray,
      callback,
    });

    this.realtime.connect();

    return () => {
      this.realtime.subscriptions.delete(counter);
      this.realtime.cleanUp(channelArray);
      this.realtime.connect();
    };
  }
}
