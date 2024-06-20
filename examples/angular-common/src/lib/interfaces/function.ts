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
 * Function
 */
export interface Function {
  /**
   * Function ID.
   */
  $id: string;
  /**
   * Function creation date in ISO 8601 format.
   */
  $createdAt: string;
  /**
   * Function update date in ISO 8601 format.
   */
  $updatedAt: string;
  /**
   * Execution permissions.
   */
  execute: string[];
  /**
   * Function name.
   */
  name: string;
  /**
   * Function enabled.
   */
  enabled: boolean;
  /**
   * Is the function deployed with the latest configuration? This is set to false if you&#039;ve changed an environment variables, entrypoint, commands, or other settings that needs redeploy to be applied. When the value is false, redeploy the function to update it with the latest configuration.
   */
  live: boolean;
  /**
   * Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project.
   */
  logging: boolean;
  /**
   * Function execution runtime.
   */
  runtime: string;
  /**
   * Function&#039;s active deployment ID.
   */
  deployment: string;
  /**
   * Function variables.
   */
  vars: Variable[];
  /**
   * Function trigger events.
   */
  events: string[];
  /**
   * Function execution schedult in CRON format.
   */
  schedule: string;
  /**
   * Function execution timeout in seconds.
   */
  timeout: number;
  /**
   * The entrypoint file used to execute the deployment.
   */
  entrypoint: string;
  /**
   * The build command used to build the deployment.
   */
  commands: string;
  /**
   * Version of Open Runtimes used for the function.
   */
  version: string;
  /**
   * Function VCS (Version Control System) installation id.
   */
  installationId: string;
  /**
   * VCS (Version Control System) Repository ID
   */
  providerRepositoryId: string;
  /**
   * VCS (Version Control System) branch name
   */
  providerBranch: string;
  /**
   * Path to function in VCS (Version Control System) repository
   */
  providerRootDirectory: string;
  /**
   * Is VCS (Version Control System) connection is in silent mode? When in silence mode, no comments will be posted on the repository pull or merge requests
   */
  providerSilentMode: boolean;
}
