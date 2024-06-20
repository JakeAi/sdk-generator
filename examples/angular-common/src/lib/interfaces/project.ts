import { Attribute } from './attribute';
import { DocumentList, } from './documentList';
import { CollectionList, } from './collectionList';
import { DatabaseList, } from './databaseList';
import { IndexList, } from './indexList';
import { UserList, } from './userList';
import { SessionList, } from './sessionList';
import { IdentityList, } from './identityList';
import { LogList, } from './logList';
import { FileList, } from './fileList';
import { BucketList, } from './bucketList';
import { TeamList, } from './teamList';
import { MembershipList, } from './membershipList';
import { FunctionList, } from './functionList';
import { InstallationList, } from './installationList';
import { ProviderRepositoryList, } from './providerRepositoryList';
import { BranchList, } from './branchList';
import { RuntimeList, } from './runtimeList';
import { DeploymentList, } from './deploymentList';
import { ExecutionList, } from './executionList';
import { ProjectList, } from './projectList';
import { WebhookList, } from './webhookList';
import { KeyList, } from './keyList';
import { PlatformList, } from './platformList';
import { CountryList, } from './countryList';
import { ContinentList, } from './continentList';
import { LanguageList, } from './languageList';
import { CurrencyList, } from './currencyList';
import { PhoneList, } from './phoneList';
import { VariableList, } from './variableList';
import { ProxyRuleList, } from './proxyRuleList';
import { LocaleCodeList, } from './localeCodeList';
import { ProviderList, } from './providerList';
import { MessageList, } from './messageList';
import { TopicList, } from './topicList';
import { SubscriberList, } from './subscriberList';
import { TargetList, } from './targetList';
import { MigrationList, } from './migrationList';
import { FirebaseProjectList, } from './firebaseProjectList';
import { Database, } from './database';
import { Collection, } from './collection';
import { AttributeList, } from './attributeList';
import { AttributeString, } from './attributeString';
import { AttributeInteger, } from './attributeInteger';
import { AttributeFloat, } from './attributeFloat';
import { AttributeBoolean, } from './attributeBoolean';
import { AttributeEmail, } from './attributeEmail';
import { AttributeEnum, } from './attributeEnum';
import { AttributeIp, } from './attributeIp';
import { AttributeUrl, } from './attributeUrl';
import { AttributeDatetime, } from './attributeDatetime';
import { AttributeRelationship, } from './attributeRelationship';
import { Index, } from './index';
import { Document, } from './document';
import { Log, } from './log';
import { User, } from './user';
import { AlgoMd5, } from './algoMd5';
import { AlgoSha, } from './algoSha';
import { AlgoPhpass, } from './algoPhpass';
import { AlgoBcrypt, } from './algoBcrypt';
import { AlgoScrypt, } from './algoScrypt';
import { AlgoScryptModified, } from './algoScryptModified';
import { AlgoArgon2, } from './algoArgon2';
import { Preferences, } from './preferences';
import { Session, } from './session';
import { Identity, } from './identity';
import { Token, } from './token';
import { Jwt, } from './jwt';
import { Locale, } from './locale';
import { LocaleCode, } from './localeCode';
import { File, } from './file';
import { Bucket, } from './bucket';
import { Team, } from './team';
import { Membership, } from './membership';
import { Function, } from './function';
import { Installation, } from './installation';
import { ProviderRepository, } from './providerRepository';
import { Detection, } from './detection';
import { Branch, } from './branch';
import { Runtime, } from './runtime';
import { Deployment, } from './deployment';
import { Execution, } from './execution';
import { Project, } from './project';
import { Webhook, } from './webhook';
import { Key, } from './key';
import { AuthProvider, } from './authProvider';
import { Platform, } from './platform';
import { Variable, } from './variable';
import { Country, } from './country';
import { Continent, } from './continent';
import { Language, } from './language';
import { Currency, } from './currency';
import { Phone, } from './phone';
import { HealthAntivirus, } from './healthAntivirus';
import { HealthQueue, } from './healthQueue';
import { HealthStatus, } from './healthStatus';
import { HealthCertificate, } from './healthCertificate';
import { HealthTime, } from './healthTime';
import { Metric, } from './metric';
import { MetricBreakdown, } from './metricBreakdown';
import { UsageDatabases, } from './usageDatabases';
import { UsageDatabase, } from './usageDatabase';
import { UsageCollection, } from './usageCollection';
import { UsageUsers, } from './usageUsers';
import { UsageStorage, } from './usageStorage';
import { UsageBuckets, } from './usageBuckets';
import { UsageFunctions, } from './usageFunctions';
import { UsageFunction, } from './usageFunction';
import { UsageProject, } from './usageProject';
import { Headers, } from './headers';
import { ProxyRule, } from './proxyRule';
import { SmsTemplate, } from './smsTemplate';
import { EmailTemplate, } from './emailTemplate';
import { ConsoleVariables, } from './consoleVariables';
import { MfaChallenge, } from './mfaChallenge';
import { MfaRecoveryCodes, } from './mfaRecoveryCodes';
import { MfaType, } from './mfaType';
import { MfaFactors, } from './mfaFactors';
import { Provider, } from './provider';
import { Message, } from './message';
import { Topic, } from './topic';
import { Subscriber, } from './subscriber';
import { Target, } from './target';
import { Migration, } from './migration';
import { MigrationReport, } from './migrationReport';
import { FirebaseProject, } from './firebaseProject';

/**
 * Project
 */
export interface Project {
  /**
   * Project ID.
   */
  $id: string;
  /**
   * Project creation date in ISO 8601 format.
   */
  $createdAt: string;
  /**
   * Project update date in ISO 8601 format.
   */
  $updatedAt: string;
  /**
   * Project name.
   */
  name: string;
  /**
   * Project description.
   */
  description: string;
  /**
   * Project team ID.
   */
  teamId: string;
  /**
   * Project logo file ID.
   */
  logo: string;
  /**
   * Project website URL.
   */
  url: string;
  /**
   * Company legal name.
   */
  legalName: string;
  /**
   * Country code in [ISO 3166-1](http://en.wikipedia.org/wiki/ISO_3166-1) two-character format.
   */
  legalCountry: string;
  /**
   * State name.
   */
  legalState: string;
  /**
   * City name.
   */
  legalCity: string;
  /**
   * Company Address.
   */
  legalAddress: string;
  /**
   * Company Tax ID.
   */
  legalTaxId: string;
  /**
   * Session duration in seconds.
   */
  authDuration: number;
  /**
   * Max users allowed. 0 is unlimited.
   */
  authLimit: number;
  /**
   * Max sessions allowed per user. 100 maximum.
   */
  authSessionsLimit: number;
  /**
   * Max allowed passwords in the history list per user. Max passwords limit allowed in history is 20. Use 0 for disabling password history.
   */
  authPasswordHistory: number;
  /**
   * Whether or not to check user&#039;s password against most commonly used passwords.
   */
  authPasswordDictionary: boolean;
  /**
   * Whether or not to check the user password for similarity with their personal data.
   */
  authPersonalDataCheck: boolean;
  /**
   * List of Auth Providers.
   */
  oAuthProviders: AuthProvider[];
  /**
   * List of Platforms.
   */
  platforms: Platform[];
  /**
   * List of Webhooks.
   */
  webhooks: Webhook[];
  /**
   * List of API Keys.
   */
  keys: Key[];
  /**
   * Status for custom SMTP
   */
  smtpEnabled: boolean;
  /**
   * SMTP sender name
   */
  smtpSenderName: string;
  /**
   * SMTP sender email
   */
  smtpSenderEmail: string;
  /**
   * SMTP reply to email
   */
  smtpReplyTo: string;
  /**
   * SMTP server host name
   */
  smtpHost: string;
  /**
   * SMTP server port
   */
  smtpPort: number;
  /**
   * SMTP server username
   */
  smtpUsername: string;
  /**
   * SMTP server password
   */
  smtpPassword: string;
  /**
   * SMTP server secure protocol
   */
  smtpSecure: string;
  /**
   * Email/Password auth method status
   */
  authEmailPassword: boolean;
  /**
   * Magic URL auth method status
   */
  authUsersAuthMagicURL: boolean;
  /**
   * Email (OTP) auth method status
   */
  authEmailOtp: boolean;
  /**
   * Anonymous auth method status
   */
  authAnonymous: boolean;
  /**
   * Invites auth method status
   */
  authInvites: boolean;
  /**
   * JWT auth method status
   */
  authJWT: boolean;
  /**
   * Phone auth method status
   */
  authPhone: boolean;
  /**
   * Account service status
   */
  serviceStatusForAccount: boolean;
  /**
   * Avatars service status
   */
  serviceStatusForAvatars: boolean;
  /**
   * Databases service status
   */
  serviceStatusForDatabases: boolean;
  /**
   * Locale service status
   */
  serviceStatusForLocale: boolean;
  /**
   * Health service status
   */
  serviceStatusForHealth: boolean;
  /**
   * Storage service status
   */
  serviceStatusForStorage: boolean;
  /**
   * Teams service status
   */
  serviceStatusForTeams: boolean;
  /**
   * Users service status
   */
  serviceStatusForUsers: boolean;
  /**
   * Functions service status
   */
  serviceStatusForFunctions: boolean;
  /**
   * GraphQL service status
   */
  serviceStatusForGraphql: boolean;
  /**
   * Messaging service status
   */
  serviceStatusForMessaging: boolean;
}
