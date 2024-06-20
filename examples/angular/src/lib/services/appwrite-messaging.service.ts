import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteMessagingService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * Create subscriber
   *
   * Create a new subscriber.
   *
   * @param {string} topicId
   * @param {string} subscriberId
   * @param {string} targetId
   * @throws {AppwriteException}
   * @returns Promise<Subscriber>
   */
  async createSubscriber(topicId: string, subscriberId: string, targetId: string): Promise<Subscriber> {
    const urlPath = '/messaging/topics/{topicId}/subscribers'.replace('{topicId}', topicId);
    const payload: Payload = { subscriberId, targetId,   };

    if (typeof topicId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "topicId"');
    }

    if (typeof subscriberId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "subscriberId"');
    }

    if (typeof targetId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }

    return this.appwriteService.call<Subscriber>('POST', urlPath, {}, payload);
  }

  /**
   * Delete subscriber
   *
   * Delete a subscriber by its unique ID.
   *
   * @param {string} topicId
   * @param {string} subscriberId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteSubscriber(topicId: string, subscriberId: string): Promise<void> {
    const urlPath = '/messaging/topics/{topicId}/subscribers/{subscriberId}'.replace('{topicId}', topicId).replace('{subscriberId}', subscriberId);
    const payload: Payload = {   };

    if (typeof topicId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "topicId"');
    }

    if (typeof subscriberId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "subscriberId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }
}