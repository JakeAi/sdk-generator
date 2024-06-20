import { DocumentBase, UploadProgress } from '@appwrite/common';

export const endpoint = 'http://localhost/v1';
export const project = '888888888';

export const genericId = '5f7a1c1e6e0b0';
export const genericUrl = 'https://www.minnich-mfg.com';
export const genericUserId = 'userId';
export const genericPhone = '(111) 111-1111';
export const genericEmail = 'email';
export const genericPassword = 'password';
export const genericName = 'test user';
export const genericSessionId = '564';
export const genericSecret = 'secret';
export const genericTeamId = 'teamId';
export const genericTeamName = 'teamName';
export const genericTeamRoles = ['owner', 'member'];
export const genericPermissions = ['read', 'write'];
export const genericMembershipId = 'membershipId';
export const genericFunctionId = 'functionId';
export const genericExecutionId = 'executionId';
export const genericHeaders = {};

export const genericWidth = 100;
export const genericHeight = 100;
export const genericGravity: 'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right' = 'center';
export const genericQuality = 75;
export const genericBorderWidth = 2;
export const genericBorderColor = '333333';
export const genericBorderRadius = 20;
export const genericOpacity = 1;
export const genericRotation = 180;
export const genericBackground = '666666';
export const genericOutput = 'jpg';

export const genericDocumentBase: DocumentBase = {
  $id: genericId,
  $collectionId: genericId,
  $createdAt: '2020-10-05T18:30:02.000Z',
  $updatedAt: '2020-10-05T18:30:02.000Z',
  $databaseId: genericId,
  $permissions: ['read', 'write'],
};

export interface AccountGetParams {
}
export interface AccountCreateParams {
  userId: string;
  email: string;
  password: string;
  name?: string;
}
export interface AccountUpdateEmailParams {
  email: string;
  password: string;
}
export interface AccountListIdentitiesParams {
  queries?: string[];
}
export interface AccountDeleteIdentityParams {
}
export interface AccountCreateJWTParams {
}
export interface AccountListLogsParams {
  queries?: string[];
}
export interface AccountUpdateMFAParams {
  mfa: boolean;
}
export interface AccountCreateMfaAuthenticatorParams {
}
export interface AccountUpdateMfaAuthenticatorParams {
  otp: string;
}
export interface AccountDeleteMfaAuthenticatorParams {
  otp: string;
}
export interface AccountCreateMfaChallengeParams {
  factor: string;
}
export interface AccountUpdateMfaChallengeParams {
  challengeId: string;
  otp: string;
}
export interface AccountListMfaFactorsParams {
}
export interface AccountGetMfaRecoveryCodesParams {
}
export interface AccountCreateMfaRecoveryCodesParams {
}
export interface AccountUpdateMfaRecoveryCodesParams {
}
export interface AccountUpdateNameParams {
  name: string;
}
export interface AccountUpdatePasswordParams {
  password: string;
  oldPassword?: string;
}
export interface AccountUpdatePhoneParams {
  phone: string;
  password: string;
}
export interface AccountGetPrefsParams {
}
export interface AccountUpdatePrefsParams {
  prefs: Partial<Preferences>;
}
export interface AccountCreateRecoveryParams {
  email: string;
  url: string;
}
export interface AccountUpdateRecoveryParams {
  userId: string;
  secret: string;
  password: string;
}
export interface AccountListSessionsParams {
}
export interface AccountDeleteSessionsParams {
}
export interface AccountCreateAnonymousSessionParams {
}
export interface AccountCreateEmailPasswordSessionParams {
  email: string;
  password: string;
}
export interface AccountUpdateMagicURLSessionParams {
  userId: string;
  secret: string;
}
export interface AccountCreateOAuth2SessionParams {
  success?: string;
  failure?: string;
  scopes?: string[];
}
export interface AccountUpdatePhoneSessionParams {
  userId: string;
  secret: string;
}
export interface AccountCreateSessionParams {
  userId: string;
  secret: string;
}
export interface AccountGetSessionParams {
}
export interface AccountUpdateSessionParams {
}
export interface AccountDeleteSessionParams {
}
export interface AccountUpdateStatusParams {
}
export interface AccountCreatePushTargetParams {
  targetId: string;
  identifier: string;
  providerId?: string;
}
export interface AccountUpdatePushTargetParams {
  identifier: string;
}
export interface AccountDeletePushTargetParams {
}
export interface AccountCreateEmailTokenParams {
  userId: string;
  email: string;
  phrase?: boolean;
}
export interface AccountCreateMagicURLTokenParams {
  userId: string;
  email: string;
  url?: string;
  phrase?: boolean;
}
export interface AccountCreateOAuth2TokenParams {
  success?: string;
  failure?: string;
  scopes?: string[];
}
export interface AccountCreatePhoneTokenParams {
  userId: string;
  phone: string;
}
export interface AccountCreateVerificationParams {
  url: string;
}
export interface AccountUpdateVerificationParams {
  userId: string;
  secret: string;
}
export interface AccountCreatePhoneVerificationParams {
}
export interface AccountUpdatePhoneVerificationParams {
  userId: string;
  secret: string;
}
export interface AvatarsGetBrowserParams {
  width?: number;
  height?: number;
  quality?: number;
}
export interface AvatarsGetCreditCardParams {
  width?: number;
  height?: number;
  quality?: number;
}
export interface AvatarsGetFaviconParams {
  url: string;
}
export interface AvatarsGetFlagParams {
  width?: number;
  height?: number;
  quality?: number;
}
export interface AvatarsGetImageParams {
  url: string;
  width?: number;
  height?: number;
}
export interface AvatarsGetInitialsParams {
  name?: string;
  width?: number;
  height?: number;
  background?: string;
}
export interface AvatarsGetQRParams {
  text: string;
  size?: number;
  margin?: number;
  download?: boolean;
}
export interface DatabasesListDocumentsParams {
  queries?: string[];
}
export interface DatabasesCreateDocumentParams {
  documentId: string;
  data: Omit<R, keyof Document>;
  permissions?: string[];
}
export interface DatabasesGetDocumentParams {
  queries?: string[];
}
export interface DatabasesUpdateDocumentParams {
  data?: Partial<Omit<R, keyof Document>>;
  permissions?: string[];
}
export interface DatabasesDeleteDocumentParams {
}
export interface FunctionsListExecutionsParams {
  queries?: string[];
  search?: string;
}
export interface FunctionsCreateExecutionParams {
  body?: string;
  async?: boolean;
  path?: string;
  method?: string;
  headers?: object;
}
export interface FunctionsGetExecutionParams {
}
export interface GraphqlQueryParams {
  query: object;
}
export interface GraphqlMutationParams {
  query: object;
}
export interface LocaleGetParams {
}
export interface LocaleListCodesParams {
}
export interface LocaleListContinentsParams {
}
export interface LocaleListCountriesParams {
}
export interface LocaleListCountriesEUParams {
}
export interface LocaleListCountriesPhonesParams {
}
export interface LocaleListCurrenciesParams {
}
export interface LocaleListLanguagesParams {
}
export interface MessagingCreateSubscriberParams {
  subscriberId: string;
  targetId: string;
}
export interface MessagingDeleteSubscriberParams {
}
export interface StorageListFilesParams {
  queries?: string[];
  search?: string;
}
export interface StorageCreateFileParams {
  fileId: string;
  file: File;
  permissions?: string[];
; onProgress: (progress: UploadProgress) => {}}
export interface StorageGetFileParams {
}
export interface StorageUpdateFileParams {
  name?: string;
  permissions?: string[];
}
export interface StorageDeleteFileParams {
}
export interface StorageGetFileDownloadParams {
}
export interface StorageGetFilePreviewParams {
  width?: number;
  height?: number;
  gravity?: string;
  quality?: number;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  opacity?: number;
  rotation?: number;
  background?: string;
  output?: string;
}
export interface StorageGetFileViewParams {
}
export interface TeamsListParams {
  queries?: string[];
  search?: string;
}
export interface TeamsCreateParams {
  teamId: string;
  name: string;
  roles?: string[];
}
export interface TeamsGetParams {
}
export interface TeamsUpdateNameParams {
  name: string;
}
export interface TeamsDeleteParams {
}
export interface TeamsListMembershipsParams {
  queries?: string[];
  search?: string;
}
export interface TeamsCreateMembershipParams {
  email?: string;
  userId?: string;
  phone?: string;
  roles: string[];
  url?: string;
  name?: string;
}
export interface TeamsGetMembershipParams {
}
export interface TeamsUpdateMembershipParams {
  roles: string[];
}
export interface TeamsDeleteMembershipParams {
}
export interface TeamsUpdateMembershipStatusParams {
  userId: string;
  secret: string;
}
export interface TeamsGetPrefsParams {
}
export interface TeamsUpdatePrefsParams {
  prefs: object;
}
