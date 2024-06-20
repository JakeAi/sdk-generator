import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteLocaleService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * Get user locale
   *
   * Get the current user location based on IP. Returns an object with user
   * country code, country name, continent name, continent code, ip address and
   * suggested currency. You can use the locale header to get the data in a
   * supported language.
* 
* ([IP Geolocation by DB-IP](https://db-ip.com))
   *
   * @throws {AppwriteException}
   * @returns Promise<Locale>
   */
  async get(): Promise<Locale> {
    const urlPath = '/locale';
    const payload: Payload = {   };

    return this.appwriteService.call<Locale>('GET', urlPath, {}, payload);
  }

  /**
   * List Locale Codes
   *
   * List of all locale codes in [ISO
   * 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).
   *
   * @throws {AppwriteException}
   * @returns Promise<LocaleCodeList>
   */
  async listCodes(): Promise<LocaleCodeList> {
    const urlPath = '/locale/codes';
    const payload: Payload = {   };

    return this.appwriteService.call<LocaleCodeList>('GET', urlPath, {}, payload);
  }

  /**
   * List continents
   *
   * List of all continents. You can use the locale header to get the data in a
   * supported language.
   *
   * @throws {AppwriteException}
   * @returns Promise<ContinentList>
   */
  async listContinents(): Promise<ContinentList> {
    const urlPath = '/locale/continents';
    const payload: Payload = {   };

    return this.appwriteService.call<ContinentList>('GET', urlPath, {}, payload);
  }

  /**
   * List countries
   *
   * List of all countries. You can use the locale header to get the data in a
   * supported language.
   *
   * @throws {AppwriteException}
   * @returns Promise<CountryList>
   */
  async listCountries(): Promise<CountryList> {
    const urlPath = '/locale/countries';
    const payload: Payload = {   };

    return this.appwriteService.call<CountryList>('GET', urlPath, {}, payload);
  }

  /**
   * List EU countries
   *
   * List of all countries that are currently members of the EU. You can use the
   * locale header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns Promise<CountryList>
   */
  async listCountriesEU(): Promise<CountryList> {
    const urlPath = '/locale/countries/eu';
    const payload: Payload = {   };

    return this.appwriteService.call<CountryList>('GET', urlPath, {}, payload);
  }

  /**
   * List countries phone codes
   *
   * List of all countries phone codes. You can use the locale header to get the
   * data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns Promise<PhoneList>
   */
  async listCountriesPhones(): Promise<PhoneList> {
    const urlPath = '/locale/countries/phones';
    const payload: Payload = {   };

    return this.appwriteService.call<PhoneList>('GET', urlPath, {}, payload);
  }

  /**
   * List currencies
   *
   * List of all currencies, including currency symbol, name, plural, and
   * decimal digits for all major and minor currencies. You can use the locale
   * header to get the data in a supported language.
   *
   * @throws {AppwriteException}
   * @returns Promise<CurrencyList>
   */
  async listCurrencies(): Promise<CurrencyList> {
    const urlPath = '/locale/currencies';
    const payload: Payload = {   };

    return this.appwriteService.call<CurrencyList>('GET', urlPath, {}, payload);
  }

  /**
   * List languages
   *
   * List of all languages classified by ISO 639-1 including 2-letter code, name
   * in English, and name in the respective language.
   *
   * @throws {AppwriteException}
   * @returns Promise<LanguageList>
   */
  async listLanguages(): Promise<LanguageList> {
    const urlPath = '/locale/languages';
    const payload: Payload = {   };

    return this.appwriteService.call<LanguageList>('GET', urlPath, {}, payload);
  }
}