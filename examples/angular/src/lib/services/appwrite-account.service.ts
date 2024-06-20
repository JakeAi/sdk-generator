import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteAccountService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * Get account
   *
   * Get the currently logged in user.
   *
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async get<P extends Preferences>(): Promise<User<P>> {
    const urlPath = '/account';
    const payload: Payload = {   };

    return this.appwriteService.call<User<P>>('GET', urlPath, {}, payload);
  }

  /**
   * Create account
   *
   * Use this endpoint to allow a new user to register a new account in your
   * project. After the user registration completes successfully, you can use
   * the
   * [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification)
   * route to start verifying the user email address. To allow the new user to
   * login to their new account, you need to create a new [account
   * session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} password
   * @param {string} name
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async create<P extends Preferences>(userId: string, email: string, password: string, name?: string): Promise<User<P>> {
    const urlPath = '/account';
    const payload: Payload = { userId, email, password, name,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof email === 'undefined') {
      throw new AppwriteException('Missing required parameter: "email"');
    }

    if (typeof password === 'undefined') {
      throw new AppwriteException('Missing required parameter: "password"');
    }

    return this.appwriteService.call<User<P>>('POST', urlPath, {}, payload);
  }

  /**
   * Update email
   *
   * Update currently logged in user account email address. After changing user
   * address, the user confirmation status will get reset. A new confirmation
   * email is not sent automatically however you can use the send confirmation
   * email endpoint again to send the confirmation email. For security measures,
   * user password is required to complete this request.
* This endpoint can also be used to convert an anonymous account to a normal
   * one, by passing an email address and a new password.
* 
   *
   * @param {string} email
   * @param {string} password
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updateEmail<P extends Preferences>(email: string, password: string): Promise<User<P>> {
    const urlPath = '/account/email';
    const payload: Payload = { email, password,   };

    if (typeof email === 'undefined') {
      throw new AppwriteException('Missing required parameter: "email"');
    }

    if (typeof password === 'undefined') {
      throw new AppwriteException('Missing required parameter: "password"');
    }

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * List Identities
   *
   * Get the list of identities for the currently logged in user.
   *
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns Promise<IdentityList>
   */
  async listIdentities(queries?: string[]): Promise<IdentityList> {
    const urlPath = '/account/identities';
    const payload: Payload = {  queries,  };

    return this.appwriteService.call<IdentityList>('GET', urlPath, {}, payload);
  }

  /**
   * Delete identity
   *
   * Delete an identity by its unique ID.
   *
   * @param {string} identityId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteIdentity(identityId: string): Promise<void> {
    const urlPath = '/account/identities/{identityId}'.replace('{identityId}', identityId);
    const payload: Payload = {   };

    if (typeof identityId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "identityId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Create JWT
   *
   * Use this endpoint to create a JSON Web Token. You can use the resulting JWT
   * to authenticate on behalf of the current user when working with the
   * Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes
   * from its creation and will be invalid if the user will logout in that time
   * frame.
   *
   * @throws {AppwriteException}
   * @returns Promise<Jwt>
   */
  async createJWT(): Promise<Jwt> {
    const urlPath = '/account/jwt';
    const payload: Payload = {   };

    return this.appwriteService.call<Jwt>('POST', urlPath, {}, payload);
  }

  /**
   * List logs
   *
   * Get the list of latest security activity logs for the currently logged in
   * user. Each log returns user IP address, location and date and time of log.
   *
   * @param {string[]} queries
   * @throws {AppwriteException}
   * @returns Promise<LogList>
   */
  async listLogs(queries?: string[]): Promise<LogList> {
    const urlPath = '/account/logs';
    const payload: Payload = {  queries,  };

    return this.appwriteService.call<LogList>('GET', urlPath, {}, payload);
  }

  /**
   * Update MFA
   *
   * Enable or disable MFA on an account.
   *
   * @param {boolean} mfa
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updateMFA<P extends Preferences>(mfa: boolean): Promise<User<P>> {
    const urlPath = '/account/mfa';
    const payload: Payload = { mfa,   };

    if (typeof mfa === 'undefined') {
      throw new AppwriteException('Missing required parameter: "mfa"');
    }

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Add Authenticator
   *
   * Add an authenticator app to be used as an MFA factor. Verify the
   * authenticator using the [verify
   * authenticator](/docs/references/cloud/client-web/account#updateMfaAuthenticator)
   * method.
   *
   * @param {string} type
   * @throws {AppwriteException}
   * @returns Promise<MfaType>
   */
  async createMfaAuthenticator(type: string): Promise<MfaType> {
    const urlPath = '/account/mfa/authenticators/{type}'.replace('{type}', type);
    const payload: Payload = {   };

    if (typeof type === 'undefined') {
      throw new AppwriteException('Missing required parameter: "type"');
    }

    return this.appwriteService.call<MfaType>('POST', urlPath, {}, payload);
  }

  /**
   * Verify Authenticator
   *
   * Verify an authenticator app after adding it using the [add
   * authenticator](/docs/references/cloud/client-web/account#createMfaAuthenticator)
   * method. add 
   *
   * @param {string} type
   * @param {string} otp
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updateMfaAuthenticator<P extends Preferences>(type: string, otp: string): Promise<User<P>> {
    const urlPath = '/account/mfa/authenticators/{type}'.replace('{type}', type);
    const payload: Payload = { otp,   };

    if (typeof type === 'undefined') {
      throw new AppwriteException('Missing required parameter: "type"');
    }

    if (typeof otp === 'undefined') {
      throw new AppwriteException('Missing required parameter: "otp"');
    }

    return this.appwriteService.call<User<P>>('PUT', urlPath, {}, payload);
  }

  /**
   * Delete Authenticator
   *
   * Delete an authenticator for a user by ID.
   *
   * @param {string} type
   * @param {string} otp
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteMfaAuthenticator(type: string, otp: string): Promise<void> {
    const urlPath = '/account/mfa/authenticators/{type}'.replace('{type}', type);
    const payload: Payload = { otp,   };

    if (typeof type === 'undefined') {
      throw new AppwriteException('Missing required parameter: "type"');
    }

    if (typeof otp === 'undefined') {
      throw new AppwriteException('Missing required parameter: "otp"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Create 2FA Challenge
   *
   * Begin the process of MFA verification after sign-in. Finish the flow with
   * [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge)
   * method.
   *
   * @param {string} factor
   * @throws {AppwriteException}
   * @returns Promise<MfaChallenge>
   */
  async createMfaChallenge(factor: string): Promise<MfaChallenge> {
    const urlPath = '/account/mfa/challenge';
    const payload: Payload = { factor,   };

    if (typeof factor === 'undefined') {
      throw new AppwriteException('Missing required parameter: "factor"');
    }

    return this.appwriteService.call<MfaChallenge>('POST', urlPath, {}, payload);
  }

  /**
   * Create MFA Challenge (confirmation)
   *
   * Complete the MFA challenge by providing the one-time password. Finish the
   * process of MFA verification by providing the one-time password. To begin
   * the flow, use
   * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
   * method.
   *
   * @param {string} challengeId
   * @param {string} otp
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async updateMfaChallenge(challengeId: string, otp: string): Promise<void> {
    const urlPath = '/account/mfa/challenge';
    const payload: Payload = { challengeId, otp,   };

    if (typeof challengeId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "challengeId"');
    }

    if (typeof otp === 'undefined') {
      throw new AppwriteException('Missing required parameter: "otp"');
    }

    return this.appwriteService.call<void>('PUT', urlPath, {}, payload);
  }

  /**
   * List Factors
   *
   * List the factors available on the account to be used as a MFA challange.
   *
   * @throws {AppwriteException}
   * @returns Promise<MfaFactors>
   */
  async listMfaFactors(): Promise<MfaFactors> {
    const urlPath = '/account/mfa/factors';
    const payload: Payload = {   };

    return this.appwriteService.call<MfaFactors>('GET', urlPath, {}, payload);
  }

  /**
   * Get MFA Recovery Codes
   *
   * Get recovery codes that can be used as backup for MFA flow. Before getting
   * codes, they must be generated using
   * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
   * method. An OTP challenge is required to read recovery codes.
   *
   * @throws {AppwriteException}
   * @returns Promise<MfaRecoveryCodes>
   */
  async getMfaRecoveryCodes(): Promise<MfaRecoveryCodes> {
    const urlPath = '/account/mfa/recovery-codes';
    const payload: Payload = {   };

    return this.appwriteService.call<MfaRecoveryCodes>('GET', urlPath, {}, payload);
  }

  /**
   * Create MFA Recovery Codes
   *
   * Generate recovery codes as backup for MFA flow. It's recommended to
   * generate and show then immediately after user successfully adds their
   * authehticator. Recovery codes can be used as a MFA verification type in
   * [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge)
   * method.
   *
   * @throws {AppwriteException}
   * @returns Promise<MfaRecoveryCodes>
   */
  async createMfaRecoveryCodes(): Promise<MfaRecoveryCodes> {
    const urlPath = '/account/mfa/recovery-codes';
    const payload: Payload = {   };

    return this.appwriteService.call<MfaRecoveryCodes>('POST', urlPath, {}, payload);
  }

  /**
   * Regenerate MFA Recovery Codes
   *
   * Regenerate recovery codes that can be used as backup for MFA flow. Before
   * regenerating codes, they must be first generated using
   * [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes)
   * method. An OTP challenge is required to regenreate recovery codes.
   *
   * @throws {AppwriteException}
   * @returns Promise<MfaRecoveryCodes>
   */
  async updateMfaRecoveryCodes(): Promise<MfaRecoveryCodes> {
    const urlPath = '/account/mfa/recovery-codes';
    const payload: Payload = {   };

    return this.appwriteService.call<MfaRecoveryCodes>('PATCH', urlPath, {}, payload);
  }

  /**
   * Update name
   *
   * Update currently logged in user account name.
   *
   * @param {string} name
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updateName<P extends Preferences>(name: string): Promise<User<P>> {
    const urlPath = '/account/name';
    const payload: Payload = { name,   };

    if (typeof name === 'undefined') {
      throw new AppwriteException('Missing required parameter: "name"');
    }

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Update password
   *
   * Update currently logged in user password. For validation, user is required
   * to pass in the new password, and the old password. For users created with
   * OAuth, Team Invites and Magic URL, oldPassword is optional.
   *
   * @param {string} password
   * @param {string} oldPassword
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updatePassword<P extends Preferences>(password: string, oldPassword?: string): Promise<User<P>> {
    const urlPath = '/account/password';
    const payload: Payload = { password, oldPassword,   };

    if (typeof password === 'undefined') {
      throw new AppwriteException('Missing required parameter: "password"');
    }

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Update phone
   *
   * Update the currently logged in user's phone number. After updating the
   * phone number, the phone verification status will be reset. A confirmation
   * SMS is not sent automatically, however you can use the [POST
   * /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification)
   * endpoint to send a confirmation SMS.
   *
   * @param {string} phone
   * @param {string} password
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updatePhone<P extends Preferences>(phone: string, password: string): Promise<User<P>> {
    const urlPath = '/account/phone';
    const payload: Payload = { phone, password,   };

    if (typeof phone === 'undefined') {
      throw new AppwriteException('Missing required parameter: "phone"');
    }

    if (typeof password === 'undefined') {
      throw new AppwriteException('Missing required parameter: "password"');
    }

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Get account preferences
   *
   * Get the preferences as a key-value object for the currently logged in user.
   *
   * @throws {AppwriteException}
   * @returns Promise<Preferences>
   */
  async getPrefs<P extends Preferences>(): Promise<Preferences> {
    const urlPath = '/account/prefs';
    const payload: Payload = {   };

    return this.appwriteService.call<Preferences>('GET', urlPath, {}, payload);
  }

  /**
   * Update preferences
   *
   * Update currently logged in user account preferences. The object you pass is
   * stored as is, and replaces any previous value. The maximum allowed prefs
   * size is 64kB and throws error if exceeded.
   *
   * @param {Partial<Preferences>} prefs
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updatePrefs<P extends Preferences>(prefs: Partial<Preferences>): Promise<User<P>> {
    const urlPath = '/account/prefs';
    const payload: Payload = { prefs,   };

    if (typeof prefs === 'undefined') {
      throw new AppwriteException('Missing required parameter: "prefs"');
    }

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Create password recovery
   *
   * Sends the user an email with a temporary secret key for password reset.
   * When the user clicks the confirmation link he is redirected back to your
   * app password reset URL with the secret key and email address values
   * attached to the URL query string. Use the query string params to submit a
   * request to the [PUT
   * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery)
   * endpoint to complete the process. The verification link sent to the user's
   * email address is valid for 1 hour.
   *
   * @param {string} email
   * @param {string} url
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async createRecovery(email: string, url: string): Promise<Token> {
    const urlPath = '/account/recovery';
    const payload: Payload = { email, url,   };

    if (typeof email === 'undefined') {
      throw new AppwriteException('Missing required parameter: "email"');
    }

    if (typeof url === 'undefined') {
      throw new AppwriteException('Missing required parameter: "url"');
    }

    return this.appwriteService.call<Token>('POST', urlPath, {}, payload);
  }

  /**
   * Create password recovery (confirmation)
   *
   * Use this endpoint to complete the user account password reset. Both the
   * **userId** and **secret** arguments will be passed as query parameters to
   * the redirect URL you have provided when sending your request to the [POST
   * /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery)
   * endpoint.
* 
* Please note that in order to avoid a [Redirect
   * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
   * the only valid redirect URLs are the ones from domains you have set when
   * adding your platforms in the console interface.
   *
   * @param {string} userId
   * @param {string} secret
   * @param {string} password
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async updateRecovery(userId: string, secret: string, password: string): Promise<Token> {
    const urlPath = '/account/recovery';
    const payload: Payload = { userId, secret, password,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    if (typeof password === 'undefined') {
      throw new AppwriteException('Missing required parameter: "password"');
    }

    return this.appwriteService.call<Token>('PUT', urlPath, {}, payload);
  }

  /**
   * List sessions
   *
   * Get the list of active sessions across different devices for the currently
   * logged in user.
   *
   * @throws {AppwriteException}
   * @returns Promise<SessionList>
   */
  async listSessions(): Promise<SessionList> {
    const urlPath = '/account/sessions';
    const payload: Payload = {   };

    return this.appwriteService.call<SessionList>('GET', urlPath, {}, payload);
  }

  /**
   * Delete sessions
   *
   * Delete all sessions from the user account and remove any sessions cookies
   * from the end client.
   *
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteSessions(): Promise<void> {
    const urlPath = '/account/sessions';
    const payload: Payload = {   };

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Create anonymous session
   *
   * Use this endpoint to allow a new user to register an anonymous account in
   * your project. This route will also create a new session for the user. To
   * allow the new user to convert an anonymous account to a normal account, you
   * need to update its [email and
   * password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail)
   * or create an [OAuth2
   * session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).
   *
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async createAnonymousSession(): Promise<Session> {
    const urlPath = '/account/sessions/anonymous';
    const payload: Payload = {   };

    return this.appwriteService.call<Session>('POST', urlPath, {}, payload);
  }

  /**
   * Create email password session
   *
   * Allow the user to login into their account by providing a valid email and
   * password combination. This route will create a new session for the user.
* 
* A user is limited to 10 active sessions at a time by default. [Learn more
   * about session
   * limits](https://appwrite.io/docs/authentication-security#limits).
   *
   * @param {string} email
   * @param {string} password
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async createEmailPasswordSession(email: string, password: string): Promise<Session> {
    const urlPath = '/account/sessions/email';
    const payload: Payload = { email, password,   };

    if (typeof email === 'undefined') {
      throw new AppwriteException('Missing required parameter: "email"');
    }

    if (typeof password === 'undefined') {
      throw new AppwriteException('Missing required parameter: "password"');
    }

    return this.appwriteService.call<Session>('POST', urlPath, {}, payload);
  }

  /**
   * Update magic URL session
   *
   * Use this endpoint to create a session from token. Provide the **userId**
   * and **secret** parameters from the successful response of authentication
   * flows initiated by token creation. For example, magic URL and phone login.
   *
   * @param {string} userId
   * @param {string} secret
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async updateMagicURLSession(userId: string, secret: string): Promise<Session> {
    const urlPath = '/account/sessions/magic-url';
    const payload: Payload = { userId, secret,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    return this.appwriteService.call<Session>('PUT', urlPath, {}, payload);
  }

  /**
   * Create OAuth2 session
   *
   * Allow the user to login to their account using the OAuth2 provider of their
   * choice. Each OAuth2 provider should be enabled from the Appwrite console
   * first. Use the success and failure arguments to provide a redirect URL's
   * back to your app when login is completed.
* 
* If there is already an active session, the new session will be attached to
   * the logged-in account. If there are no active sessions, the server will
   * attempt to look for a user with the same email address as the email
   * received from the OAuth2 provider and attach the new session to the
   * existing user. If no matching user is found - the server will create a new
   * user.
* 
* A user is limited to 10 active sessions at a time by default. [Learn more
   * about session
   * limits](https://appwrite.io/docs/authentication-security#limits).
* 
   *
   * @param {string} provider
   * @param {string} success
   * @param {string} failure
   * @param {string[]} scopes
   * @throws {AppwriteException}
   * @returns void | URL
   */
  createOAuth2Session(provider: string, success?: string, failure?: string, scopes?: string[]): void | URL {
    const urlPath = '/account/sessions/oauth2/{provider}'.replace('{provider}', provider);
    const payload: Payload = {  success, failure, scopes,  };

    if (typeof provider === 'undefined') {
      throw new AppwriteException('Missing required parameter: "provider"');
    }

            const uri = new URL(this.appwriteService.config.endpoint + urlPath);
            payload['project'] = this.appwriteService.config.project;
            prepareSearchParams(uri, payload);

            if (typeof window !== 'undefined' && window?.location) {
                window.location.href = uri.toString();
            } else {
                return uri;
            }
  }

  /**
   * Update phone session
   *
   * Use this endpoint to create a session from token. Provide the **userId**
   * and **secret** parameters from the successful response of authentication
   * flows initiated by token creation. For example, magic URL and phone login.
   *
   * @param {string} userId
   * @param {string} secret
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async updatePhoneSession(userId: string, secret: string): Promise<Session> {
    const urlPath = '/account/sessions/phone';
    const payload: Payload = { userId, secret,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    return this.appwriteService.call<Session>('PUT', urlPath, {}, payload);
  }

  /**
   * Create session
   *
   * Use this endpoint to create a session from token. Provide the **userId**
   * and **secret** parameters from the successful response of authentication
   * flows initiated by token creation. For example, magic URL and phone login.
   *
   * @param {string} userId
   * @param {string} secret
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async createSession(userId: string, secret: string): Promise<Session> {
    const urlPath = '/account/sessions/token';
    const payload: Payload = { userId, secret,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    return this.appwriteService.call<Session>('POST', urlPath, {}, payload);
  }

  /**
   * Get session
   *
   * Use this endpoint to get a logged in user's session using a Session ID.
   * Inputting 'current' will return the current session being used.
   *
   * @param {string} sessionId
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async getSession(sessionId: string): Promise<Session> {
    const urlPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
    const payload: Payload = {   };

    if (typeof sessionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "sessionId"');
    }

    return this.appwriteService.call<Session>('GET', urlPath, {}, payload);
  }

  /**
   * Update session
   *
   * Use this endpoint to extend a session's length. Extending a session is
   * useful when session expiry is short. If the session was created using an
   * OAuth provider, this endpoint refreshes the access token from the provider.
   *
   * @param {string} sessionId
   * @throws {AppwriteException}
   * @returns Promise<Session>
   */
  async updateSession(sessionId: string): Promise<Session> {
    const urlPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
    const payload: Payload = {   };

    if (typeof sessionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "sessionId"');
    }

    return this.appwriteService.call<Session>('PATCH', urlPath, {}, payload);
  }

  /**
   * Delete session
   *
   * Logout the user. Use 'current' as the session ID to logout on this device,
   * use a session ID to logout on another device. If you're looking to logout
   * the user on all devices, use [Delete
   * Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions)
   * instead.
   *
   * @param {string} sessionId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteSession(sessionId: string): Promise<void> {
    const urlPath = '/account/sessions/{sessionId}'.replace('{sessionId}', sessionId);
    const payload: Payload = {   };

    if (typeof sessionId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "sessionId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Update status
   *
   * Block the currently logged in user account. Behind the scene, the user
   * record is not deleted but permanently blocked from any access. To
   * completely delete a user, use the Users API instead.
   *
   * @throws {AppwriteException}
   * @returns Promise<User<P>>
   */
  async updateStatus<P extends Preferences>(): Promise<User<P>> {
    const urlPath = '/account/status';
    const payload: Payload = {   };

    return this.appwriteService.call<User<P>>('PATCH', urlPath, {}, payload);
  }

  /**
   * Create push target
   *
   *
   * @param {string} targetId
   * @param {string} identifier
   * @param {string} providerId
   * @throws {AppwriteException}
   * @returns Promise<Target>
   */
  async createPushTarget(targetId: string, identifier: string, providerId?: string): Promise<Target> {
    const urlPath = '/account/targets/push';
    const payload: Payload = { targetId, identifier, providerId,   };

    if (typeof targetId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }

    if (typeof identifier === 'undefined') {
      throw new AppwriteException('Missing required parameter: "identifier"');
    }

    return this.appwriteService.call<Target>('POST', urlPath, {}, payload);
  }

  /**
   * Update push target
   *
   *
   * @param {string} targetId
   * @param {string} identifier
   * @throws {AppwriteException}
   * @returns Promise<Target>
   */
  async updatePushTarget(targetId: string, identifier: string): Promise<Target> {
    const urlPath = '/account/targets/{targetId}/push'.replace('{targetId}', targetId);
    const payload: Payload = { identifier,   };

    if (typeof targetId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }

    if (typeof identifier === 'undefined') {
      throw new AppwriteException('Missing required parameter: "identifier"');
    }

    return this.appwriteService.call<Target>('PUT', urlPath, {}, payload);
  }

  /**
   * Delete push target
   *
   *
   * @param {string} targetId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deletePushTarget(targetId: string): Promise<void> {
    const urlPath = '/account/targets/{targetId}/push'.replace('{targetId}', targetId);
    const payload: Payload = {   };

    if (typeof targetId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "targetId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Create email token (OTP)
   *
   * Sends the user an email with a secret key for creating a session. If the
   * provided user ID has not be registered, a new user will be created. Use the
   * returned user ID and secret and submit a request to the [POST
   * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
   * endpoint to complete the login process. The secret sent to the user's email
   * is valid for 15 minutes.
* 
* A user is limited to 10 active sessions at a time by default. [Learn more
   * about session
   * limits](https://appwrite.io/docs/authentication-security#limits).
   *
   * @param {string} userId
   * @param {string} email
   * @param {boolean} phrase
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async createEmailToken(userId: string, email: string, phrase?: boolean): Promise<Token> {
    const urlPath = '/account/tokens/email';
    const payload: Payload = { userId, email, phrase,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof email === 'undefined') {
      throw new AppwriteException('Missing required parameter: "email"');
    }

    return this.appwriteService.call<Token>('POST', urlPath, {}, payload);
  }

  /**
   * Create magic URL token
   *
   * Sends the user an email with a secret key for creating a session. If the
   * provided user ID has not been registered, a new user will be created. When
   * the user clicks the link in the email, the user is redirected back to the
   * URL you provided with the secret key and userId values attached to the URL
   * query string. Use the query string parameters to submit a request to the
   * [POST
   * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
   * endpoint to complete the login process. The link sent to the user's email
   * address is valid for 1 hour. If you are on a mobile device you can leave
   * the URL parameter empty, so that the login completion will be handled by
   * your Appwrite instance by default.
* 
* A user is limited to 10 active sessions at a time by default. [Learn more
   * about session
   * limits](https://appwrite.io/docs/authentication-security#limits).
* 
   *
   * @param {string} userId
   * @param {string} email
   * @param {string} url
   * @param {boolean} phrase
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async createMagicURLToken(userId: string, email: string, url?: string, phrase?: boolean): Promise<Token> {
    const urlPath = '/account/tokens/magic-url';
    const payload: Payload = { userId, email, url, phrase,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof email === 'undefined') {
      throw new AppwriteException('Missing required parameter: "email"');
    }

    return this.appwriteService.call<Token>('POST', urlPath, {}, payload);
  }

  /**
   * Create OAuth2 token
   *
   * Allow the user to login to their account using the OAuth2 provider of their
   * choice. Each OAuth2 provider should be enabled from the Appwrite console
   * first. Use the success and failure arguments to provide a redirect URL's
   * back to your app when login is completed. 
* 
* If authentication succeeds, `userId` and `secret` of a token will be
   * appended to the success URL as query parameters. These can be used to
   * create a new session using the [Create
   * session](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
   * endpoint.
* 
* A user is limited to 10 active sessions at a time by default. [Learn more
   * about session
   * limits](https://appwrite.io/docs/authentication-security#limits).
   *
   * @param {string} provider
   * @param {string} success
   * @param {string} failure
   * @param {string[]} scopes
   * @throws {AppwriteException}
   * @returns void | URL
   */
  createOAuth2Token(provider: string, success?: string, failure?: string, scopes?: string[]): void | URL {
    const urlPath = '/account/tokens/oauth2/{provider}'.replace('{provider}', provider);
    const payload: Payload = {  success, failure, scopes,  };

    if (typeof provider === 'undefined') {
      throw new AppwriteException('Missing required parameter: "provider"');
    }

            const uri = new URL(this.appwriteService.config.endpoint + urlPath);
            payload['project'] = this.appwriteService.config.project;
            prepareSearchParams(uri, payload);

            if (typeof window !== 'undefined' && window?.location) {
                window.location.href = uri.toString();
            } else {
                return uri;
            }
  }

  /**
   * Create phone token
   *
   * Sends the user an SMS with a secret key for creating a session. If the
   * provided user ID has not be registered, a new user will be created. Use the
   * returned user ID and secret and submit a request to the [POST
   * /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession)
   * endpoint to complete the login process. The secret sent to the user's phone
   * is valid for 15 minutes.
* 
* A user is limited to 10 active sessions at a time by default. [Learn more
   * about session
   * limits](https://appwrite.io/docs/authentication-security#limits).
   *
   * @param {string} userId
   * @param {string} phone
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async createPhoneToken(userId: string, phone: string): Promise<Token> {
    const urlPath = '/account/tokens/phone';
    const payload: Payload = { userId, phone,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof phone === 'undefined') {
      throw new AppwriteException('Missing required parameter: "phone"');
    }

    return this.appwriteService.call<Token>('POST', urlPath, {}, payload);
  }

  /**
   * Create email verification
   *
   * Use this endpoint to send a verification message to your user email address
   * to confirm they are the valid owners of that address. Both the **userId**
   * and **secret** arguments will be passed as query parameters to the URL you
   * have provided to be attached to the verification email. The provided URL
   * should redirect the user back to your app and allow you to complete the
   * verification process by verifying both the **userId** and **secret**
   * parameters. Learn more about how to [complete the verification
   * process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification).
   * The verification link sent to the user's email address is valid for 7 days.
* 
* Please note that in order to avoid a [Redirect
   * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md),
   * the only valid redirect URLs are the ones from domains you have set when
   * adding your platforms in the console interface.
* 
   *
   * @param {string} url
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async createVerification(url: string): Promise<Token> {
    const urlPath = '/account/verification';
    const payload: Payload = { url,   };

    if (typeof url === 'undefined') {
      throw new AppwriteException('Missing required parameter: "url"');
    }

    return this.appwriteService.call<Token>('POST', urlPath, {}, payload);
  }

  /**
   * Create email verification (confirmation)
   *
   * Use this endpoint to complete the user email verification process. Use both
   * the **userId** and **secret** parameters that were attached to your app URL
   * to verify the user email ownership. If confirmed this route will return a
   * 200 status code.
   *
   * @param {string} userId
   * @param {string} secret
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async updateVerification(userId: string, secret: string): Promise<Token> {
    const urlPath = '/account/verification';
    const payload: Payload = { userId, secret,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    return this.appwriteService.call<Token>('PUT', urlPath, {}, payload);
  }

  /**
   * Create phone verification
   *
   * Use this endpoint to send a verification SMS to the currently logged in
   * user. This endpoint is meant for use after updating a user's phone number
   * using the
   * [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone)
   * endpoint. Learn more about how to [complete the verification
   * process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification).
   * The verification code sent to the user's phone number is valid for 15
   * minutes.
   *
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async createPhoneVerification(): Promise<Token> {
    const urlPath = '/account/verification/phone';
    const payload: Payload = {   };

    return this.appwriteService.call<Token>('POST', urlPath, {}, payload);
  }

  /**
   * Create phone verification (confirmation)
   *
   * Use this endpoint to complete the user phone verification process. Use the
   * **userId** and **secret** that were sent to your user's phone number to
   * verify the user email ownership. If confirmed this route will return a 200
   * status code.
   *
   * @param {string} userId
   * @param {string} secret
   * @throws {AppwriteException}
   * @returns Promise<Token>
   */
  async updatePhoneVerification(userId: string, secret: string): Promise<Token> {
    const urlPath = '/account/verification/phone';
    const payload: Payload = { userId, secret,   };

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    return this.appwriteService.call<Token>('PUT', urlPath, {}, payload);
  }
}