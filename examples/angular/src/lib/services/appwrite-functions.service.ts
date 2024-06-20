import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteFunctionsService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * List executions
   *
   * Get a list of all the current user function execution logs. You can use the
   * query params to filter your results.
   *
   * @param {string} functionId
   * @param {string[]} queries
   * @param {string} search
   * @throws {AppwriteException}
   * @returns Promise<ExecutionList>
   */
  async listExecutions(functionId: string, queries?: string[], search?: string): Promise<ExecutionList> {
    const urlPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
    const payload: Payload = {  queries, search,  };

    if (typeof functionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "functionId"');
    }

    return this.appwriteService.call<ExecutionList>('GET', urlPath, {}, payload);
  }

  /**
   * Create execution
   *
   * Trigger a function execution. The returned object will return you the
   * current execution status. You can ping the `Get Execution` endpoint to get
   * updates on the current execution status. Once this endpoint is called, your
   * function execution process will start asynchronously.
   *
   * @param {string} functionId
   * @param {string} body
   * @param {boolean} async
   * @param {string} path
   * @param {string} method
   * @param {object} headers
   * @throws {AppwriteException}
   * @returns Promise<Execution>
   */
  async createExecution(functionId: string, body?: string, async?: boolean, path?: string, method?: string, headers?: object): Promise<Execution> {
    const urlPath = '/functions/{functionId}/executions'.replace('{functionId}', functionId);
    const payload: Payload = { body, async, path, method, headers,   };

    if (typeof functionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "functionId"');
    }

    return this.appwriteService.call<Execution>('POST', urlPath, {}, payload);
  }

  /**
   * Get execution
   *
   * Get a function execution log by its unique ID.
   *
   * @param {string} functionId
   * @param {string} executionId
   * @throws {AppwriteException}
   * @returns Promise<Execution>
   */
  async getExecution(functionId: string, executionId: string): Promise<Execution> {
    const urlPath = '/functions/{functionId}/executions/{executionId}'.replace('{functionId}', functionId).replace('{executionId}', executionId);
    const payload: Payload = {   };

    if (typeof functionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "functionId"');
    }

    if (typeof executionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "executionId"');
    }

    return this.appwriteService.call<Execution>('GET', urlPath, {}, payload);
  }
}