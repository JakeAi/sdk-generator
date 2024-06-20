import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteDatabasesService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * List documents
   *
   * Get a list of all the user's documents in a given collection. You can use
   * the query params to filter your results.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns Promise<DocumentList<R>>
   */
  async listDocuments<R>(databaseId: string, collectionId: string, queries?: string[]): Promise<DocumentList<R>> {
    const urlPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
    const payload: Payload = {  queries,  };

    if (typeof databaseId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }

    if (typeof collectionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }

    return this.appwriteService.call<DocumentList<R>>('GET', urlPath, {}, payload);
  }

  /**
   * Create document
   *
   * Create a new Document. Before using this route, you should create a new
   * collection resource using either a [server
   * integration](https://appwrite.io/docs/server/databases#databasesCreateCollection)
   * API or directly from your database console.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {Omit<R, keyof Document>} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns Promise<Document<R>>
   */
  async createDocument<R>(databaseId: string, collectionId: string, documentId: string, data: Omit<R, keyof Document>, permissions?: string[]): Promise<Document<R>> {
    const urlPath = '/databases/{databaseId}/collections/{collectionId}/documents'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId);
    const payload: Payload = { documentId, data, permissions,   };

    if (typeof databaseId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }

    if (typeof collectionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }

    if (typeof documentId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }

    if (typeof data === 'undefined') {
      throw new AppwriteException('Missing required parameter: "data"');
    }

    return this.appwriteService.call<Document<R>>('POST', urlPath, {}, payload);
  }

  /**
   * Get document
   *
   * Get a document by its unique ID. This endpoint response returns a JSON
   * object with the document data.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns Promise<Document<R>>
   */
  async getDocument<R>(databaseId: string, collectionId: string, documentId: string, queries?: string[]): Promise<Document<R>> {
    const urlPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
    const payload: Payload = {  queries,  };

    if (typeof databaseId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }

    if (typeof collectionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }

    if (typeof documentId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }

    return this.appwriteService.call<Document<R>>('GET', urlPath, {}, payload);
  }

  /**
   * Update document
   *
   * Update a document by its unique ID. Using the patch method you can pass
   * only specific fields that will get updated.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @param {Partial<Omit<R, keyof Document>>} data
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns Promise<Document<R>>
   */
  async updateDocument<R>(databaseId: string, collectionId: string, documentId: string, data?: Partial<Omit<R, keyof Document>>, permissions?: string[]): Promise<Document<R>> {
    const urlPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
    const payload: Payload = { data, permissions,   };

    if (typeof databaseId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }

    if (typeof collectionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }

    if (typeof documentId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }

    return this.appwriteService.call<Document<R>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Delete document
   *
   * Delete a document by its unique ID.
   *
   * @param {string} databaseId
   * @param {string} collectionId
   * @param {string} documentId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteDocument(databaseId: string, collectionId: string, documentId: string): Promise<void> {
    const urlPath = '/databases/{databaseId}/collections/{collectionId}/documents/{documentId}'.replace('{databaseId}', databaseId).replace('{collectionId}', collectionId).replace('{documentId}', documentId);
    const payload: Payload = {   };

    if (typeof databaseId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "databaseId"');
    }

    if (typeof collectionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "collectionId"');
    }

    if (typeof documentId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "documentId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }
}