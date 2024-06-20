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
 * Deployment
 */
export interface Deployment {
  /**
   * Deployment ID.
   */
  $id: string;
  /**
   * Deployment creation date in ISO 8601 format.
   */
  $createdAt: string;
  /**
   * Deployment update date in ISO 8601 format.
   */
  $updatedAt: string;
  /**
   * Type of deployment.
   */
  type: string;
  /**
   * Resource ID.
   */
  resourceId: string;
  /**
   * Resource type.
   */
  resourceType: string;
  /**
   * The entrypoint file to use to execute the deployment code.
   */
  entrypoint: string;
  /**
   * The code size in bytes.
   */
  size: number;
  /**
   * The current build ID.
   */
  buildId: string;
  /**
   * Whether the deployment should be automatically activated.
   */
  activate: boolean;
  /**
   * The deployment status. Possible values are &quot;processing&quot;, &quot;building&quot;, &quot;waiting&quot;, &quot;ready&quot;, and &quot;failed&quot;.
   */
  status: string;
  /**
   * The build logs.
   */
  buildLogs: string;
  /**
   * The current build time in seconds.
   */
  buildTime: number;
  /**
   * The name of the vcs provider repository
   */
  providerRepositoryName: string;
  /**
   * The name of the vcs provider repository owner
   */
  providerRepositoryOwner: string;
  /**
   * The url of the vcs provider repository
   */
  providerRepositoryUrl: string;
  /**
   * The branch of the vcs repository
   */
  providerBranch: string;
  /**
   * The commit hash of the vcs commit
   */
  providerCommitHash: string;
  /**
   * The url of vcs commit author
   */
  providerCommitAuthorUrl: string;
  /**
   * The name of vcs commit author
   */
  providerCommitAuthor: string;
  /**
   * The commit message
   */
  providerCommitMessage: string;
  /**
   * The url of the vcs commit
   */
  providerCommitUrl: string;
  /**
   * The branch of the vcs repository
   */
  providerBranchUrl: string;
}
