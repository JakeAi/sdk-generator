import { InjectionToken } from '@angular/core';
import * as sentryCore from '@sentry/core';

export const SENTRY_PROVIDER = new InjectionToken('SENTRY_PROVIDER');
export type SentryCore = typeof sentryCore;

export interface SentryProvider extends SentryCore {}
