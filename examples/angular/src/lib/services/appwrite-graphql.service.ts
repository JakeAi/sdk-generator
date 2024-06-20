import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteGraphqlService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * GraphQL endpoint
   *
   * Execute a GraphQL mutation.
   *
   * @param {object} query
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async query(query: object): Promise<void> {
    const urlPath = '/graphql';
    const payload: Payload = { query,   };

    if (typeof query === 'undefined') {
      throw new AppwriteException('Missing required parameter: "query"');
    }

    return this.appwriteService.call<void>('POST', urlPath, {}, payload);
  }

  /**
   * GraphQL endpoint
   *
   * Execute a GraphQL mutation.
   *
   * @param {object} query
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async mutation(query: object): Promise<void> {
    const urlPath = '/graphql/mutation';
    const payload: Payload = { query,   };

    if (typeof query === 'undefined') {
      throw new AppwriteException('Missing required parameter: "query"');
    }

    return this.appwriteService.call<void>('POST', urlPath, {}, payload);
  }
}