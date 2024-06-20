import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { AuthConfig } from './config';
import { AuthGuardDirective, RoleAccessDirective, RoleGuardDirective } from './directives';
import { AppwriteContentPipe, AppwriteFileDownloadPipe, AppwriteFilePipe, AppwriteFilesPipe, AppwriteImagePipe } from './pipes';
import {
  AppwriteAccountService,
  AppwriteAvatarsService,
  AppwriteDatabasesService,
  AppwriteFunctionsService,
  AppwriteLocaleService,
  AppwriteService,
  AppwriteStorageService,
  AppwriteTeamsService,
  AuthService
} from './services';
import { APPWRITE_LOCATION_PROVIDER_TOKEN, APPWRITE_OPTIONS_TOKEN } from './tokens';

export type TeamAndRoles = { teamId: string; roles: string[] };
export type TeamsAndRoles = TeamAndRoles[];

export * from './config';
export * from './directives';
export * from './dto';
export * from './exceptions';
export * from './guards';
export * from './pipes';
export * from './services';
export * from './tokens';
export * from './util';
export * from './utilities';

export interface AppwriteOptions {
  appwriteOptionsProvider?: Provider;
  config?: {
    tokenGetter?: (key: string) => string;
    tokenSetter?: (key: string, value: string) => void;
    tokenClearer?: (key: string) => void;
    database?: string;
    endpointUrl: string;
    projectId: string;
    storageBucket?: string;
  };
}

const ui = [  
  AppwriteContentPipe,
  AppwriteImagePipe,
  AppwriteFilePipe,
  AppwriteFilesPipe,
  AppwriteFileDownloadPipe,
  AuthGuardDirective,
  RoleAccessDirective,
  RoleGuardDirective
];

@NgModule({
  declarations: [...ui],
  imports: [CommonModule, HttpClientModule],
  providers: [],
  exports: [...ui],
})
export class AppwriteAngularModule {
  static forRoot(options: AppwriteOptions): ModuleWithProviders<AppwriteAngularModule> {
    const defaultOptions = {
      tokenSetter: (key, value) => localStorage.setItem(key, value),
      tokenGetter: (key) => localStorage.getItem(key) || '',
      tokenClearer: (key) => localStorage.clear(),
      database: 'default',
    };
    return {
      ngModule: AppwriteAngularModule,
      providers: [
        options.appwriteOptionsProvider || { provide: APPWRITE_OPTIONS_TOKEN, useValue: { ...defaultOptions, ...options.config } },
        { provide: APPWRITE_LOCATION_PROVIDER_TOKEN, useFactory: () => window.location },
        AuthConfig,
        AuthService,
        // AppwriteAuthService,
        AppwriteService,
        AppwriteAccountService,
        AppwriteAvatarsService,
        AppwriteDatabasesService,
        AppwriteFunctionsService,
        AppwriteLocaleService,
        AppwriteStorageService,
        AppwriteTeamsService,
      ],
    };
  }
}
