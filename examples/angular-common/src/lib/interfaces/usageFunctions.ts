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
 * UsageFunctions
 */
export interface UsageFunctions {
  /**
   * Time range of the usage stats.
   */
  range: string;
  /**
   * Total aggregated number of functions.
   */
  functionsTotal: number;
  /**
   * Total aggregated number of functions deployments.
   */
  deploymentsTotal: number;
  /**
   * Total aggregated sum of functions deployment storage.
   */
  deploymentsStorageTotal: number;
  /**
   * Total aggregated number of functions build.
   */
  buildsTotal: number;
  /**
   * total aggregated sum of functions build storage.
   */
  buildsStorageTotal: number;
  /**
   * Total aggregated sum of functions build compute time.
   */
  buildsTimeTotal: number;
  /**
   * Total  aggregated number of functions execution.
   */
  executionsTotal: number;
  /**
   * Total aggregated sum of functions  execution compute time.
   */
  executionsTimeTotal: number;
  /**
   * Aggregated number of functions per period.
   */
  functions: Metric[];
  /**
   * Aggregated number of functions deployment per period.
   */
  deployments: Metric[];
  /**
   * Aggregated number of  functions deployment storage per period.
   */
  deploymentsStorage: Metric[];
  /**
   * Aggregated number of functions build per period.
   */
  builds: Metric[];
  /**
   * Aggregated sum of functions build storage per period.
   */
  buildsStorage: Metric[];
  /**
   * Aggregated sum of  functions build compute time per period.
   */
  buildsTime: Metric[];
  /**
   * Aggregated number of  functions execution per period.
   */
  executions: Metric[];
  /**
   * Aggregated number of functions execution compute time per period.
   */
  executionsTime: Metric[];
}
