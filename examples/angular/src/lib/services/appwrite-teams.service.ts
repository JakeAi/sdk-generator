import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteTeamsService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * List teams
   *
   * Get a list of all the teams in which the current user is a member. You can
   * use the parameters to filter your results.
   *
   * @param {string[]} queries
   * @param {string} search
   * @throws {AppwriteException}
   * @returns Promise<TeamList<P>>
   */
  async list<P extends Preferences>(queries?: string[], search?: string): Promise<TeamList<P>> {
    const urlPath = '/teams';
    const payload: Payload = {  queries, search,  };

    return this.appwriteService.call<TeamList<P>>('GET', urlPath, {}, payload);
  }

  /**
   * Create team
   *
   * Create a new team. The user who creates the team will automatically be
   * assigned as the owner of the team. Only the users with the owner role can
   * invite new members, add new owners and delete or update the team.
   *
   * @param {string} teamId
   * @param {string} name
   * @param {string[]} roles
   * @throws {AppwriteException}
   * @returns Promise<Team<P>>
   */
  async create<P extends Preferences>(teamId: string, name: string, roles?: string[]): Promise<Team<P>> {
    const urlPath = '/teams';
    const payload: Payload = { teamId, name, roles,   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof name === 'undefined') {
      throw new AppwriteException('Missing required parameter: "name"');
    }

    return this.appwriteService.call<Team<P>>('POST', urlPath, {}, payload);
  }

  /**
   * Get team
   *
   * Get a team by its ID. All team members have read access for this resource.
   *
   * @param {string} teamId
   * @throws {AppwriteException}
   * @returns Promise<Team<P>>
   */
  async get<P extends Preferences>(teamId: string): Promise<Team<P>> {
    const urlPath = '/teams/{teamId}'.replace('{teamId}', teamId);
    const payload: Payload = {   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    return this.appwriteService.call<Team<P>>('GET', urlPath, {}, payload);
  }

  /**
   * Update name
   *
   * Update the team's name by its unique ID.
   *
   * @param {string} teamId
   * @param {string} name
   * @throws {AppwriteException}
   * @returns Promise<Team<P>>
   */
  async updateName<P extends Preferences>(teamId: string, name: string): Promise<Team<P>> {
    const urlPath = '/teams/{teamId}'.replace('{teamId}', teamId);
    const payload: Payload = { name,   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof name === 'undefined') {
      throw new AppwriteException('Missing required parameter: "name"');
    }

    return this.appwriteService.call<Team<P>>('PUT', urlPath, {}, payload);
  }

  /**
   * Delete team
   *
   * Delete a team using its ID. Only team members with the owner role can
   * delete the team.
   *
   * @param {string} teamId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async delete(teamId: string): Promise<void> {
    const urlPath = '/teams/{teamId}'.replace('{teamId}', teamId);
    const payload: Payload = {   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * List team memberships
   *
   * Use this endpoint to list a team's members using the team's ID. All team
   * members have read access to this endpoint.
   *
   * @param {string} teamId
   * @param {string[]} queries
   * @param {string} search
   * @throws {AppwriteException}
   * @returns Promise<MembershipList>
   */
  async listMemberships(teamId: string, queries?: string[], search?: string): Promise<MembershipList> {
    const urlPath = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
    const payload: Payload = {  queries, search,  };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    return this.appwriteService.call<MembershipList>('GET', urlPath, {}, payload);
  }

  /**
   * Create team membership
   *
   * Invite a new member to join your team. Provide an ID for existing users, or
   * invite unregistered users using an email or phone number. If initiated from
   * a Client SDK, Appwrite will send an email or sms with a link to join the
   * team to the invited user, and an account will be created for them if one
   * doesn't exist. If initiated from a Server SDK, the new member will be added
   * automatically to the team.
* 
* You only need to provide one of a user ID, email, or phone number. Appwrite
   * will prioritize accepting the user ID > email > phone number if you provide
   * more than one of these parameters.
* 
* Use the `url` parameter to redirect the user from the invitation email to
   * your app. After the user is redirected, use the [Update Team Membership
   * Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus)
   * endpoint to allow the user to accept the invitation to the team. 
* 
* Please note that to avoid a [Redirect
   * Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md)
   * Appwrite will accept the only redirect URLs under the domains you have
   * added as a platform on the Appwrite Console.
* 
   *
   * @param {string} teamId
   * @param {string[]} roles
   * @param {string} email
   * @param {string} userId
   * @param {string} phone
   * @param {string} url
   * @param {string} name
   * @throws {AppwriteException}
   * @returns Promise<Membership>
   */
  async createMembership(teamId: string, roles: string[], email?: string, userId?: string, phone?: string, url?: string, name?: string): Promise<Membership> {
    const urlPath = '/teams/{teamId}/memberships'.replace('{teamId}', teamId);
    const payload: Payload = { email, userId, phone, roles, url, name,   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof roles === 'undefined') {
      throw new AppwriteException('Missing required parameter: "roles"');
    }

    return this.appwriteService.call<Membership>('POST', urlPath, {}, payload);
  }

  /**
   * Get team membership
   *
   * Get a team member by the membership unique id. All team members have read
   * access for this resource.
   *
   * @param {string} teamId
   * @param {string} membershipId
   * @throws {AppwriteException}
   * @returns Promise<Membership>
   */
  async getMembership(teamId: string, membershipId: string): Promise<Membership> {
    const urlPath = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
    const payload: Payload = {   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof membershipId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }

    return this.appwriteService.call<Membership>('GET', urlPath, {}, payload);
  }

  /**
   * Update membership
   *
   * Modify the roles of a team member. Only team members with the owner role
   * have access to this endpoint. Learn more about [roles and
   * permissions](https://appwrite.io/docs/permissions).
* 
   *
   * @param {string} teamId
   * @param {string} membershipId
   * @param {string[]} roles
   * @throws {AppwriteException}
   * @returns Promise<Membership>
   */
  async updateMembership(teamId: string, membershipId: string, roles: string[]): Promise<Membership> {
    const urlPath = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
    const payload: Payload = { roles,   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof membershipId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }

    if (typeof roles === 'undefined') {
      throw new AppwriteException('Missing required parameter: "roles"');
    }

    return this.appwriteService.call<Membership>('PATCH', urlPath, {}, payload);
  }

  /**
   * Delete team membership
   *
   * This endpoint allows a user to leave a team or for a team owner to delete
   * the membership of any other team member. You can also use this endpoint to
   * delete a user membership even if it is not accepted.
   *
   * @param {string} teamId
   * @param {string} membershipId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteMembership(teamId: string, membershipId: string): Promise<void> {
    const urlPath = '/teams/{teamId}/memberships/{membershipId}'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
    const payload: Payload = {   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof membershipId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Update team membership status
   *
   * Use this endpoint to allow a user to accept an invitation to join a team
   * after being redirected back to your app from the invitation email received
   * by the user.
* 
* If the request is successful, a session for the user is automatically
   * created.
* 
   *
   * @param {string} teamId
   * @param {string} membershipId
   * @param {string} userId
   * @param {string} secret
   * @throws {AppwriteException}
   * @returns Promise<Membership>
   */
  async updateMembershipStatus(teamId: string, membershipId: string, userId: string, secret: string): Promise<Membership> {
    const urlPath = '/teams/{teamId}/memberships/{membershipId}/status'.replace('{teamId}', teamId).replace('{membershipId}', membershipId);
    const payload: Payload = { userId, secret,   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof membershipId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "membershipId"');
    }

    if (typeof userId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "userId"');
    }

    if (typeof secret === 'undefined') {
      throw new AppwriteException('Missing required parameter: "secret"');
    }

    return this.appwriteService.call<Membership>('PATCH', urlPath, {}, payload);
  }

  /**
   * Get team preferences
   *
   * Get the team's shared preferences by its unique ID. If a preference doesn't
   * need to be shared by all team members, prefer storing them in [user
   * preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).
   *
   * @param {string} teamId
   * @throws {AppwriteException}
   * @returns Promise<Preferences>
   */
  async getPrefs<P extends Preferences>(teamId: string): Promise<Preferences> {
    const urlPath = '/teams/{teamId}/prefs'.replace('{teamId}', teamId);
    const payload: Payload = {   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    return this.appwriteService.call<Preferences>('GET', urlPath, {}, payload);
  }

  /**
   * Update preferences
   *
   * Update the team's preferences by its unique ID. The object you pass is
   * stored as is and replaces any previous value. The maximum allowed prefs
   * size is 64kB and throws an error if exceeded.
   *
   * @param {string} teamId
   * @param {object} prefs
   * @throws {AppwriteException}
   * @returns Promise<Preferences>
   */
  async updatePrefs<P extends Preferences>(teamId: string, prefs: object): Promise<Preferences> {
    const urlPath = '/teams/{teamId}/prefs'.replace('{teamId}', teamId);
    const payload: Payload = { prefs,   };

    if (typeof teamId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "teamId"');
    }

    if (typeof prefs === 'undefined') {
      throw new AppwriteException('Missing required parameter: "prefs"');
    }

    return this.appwriteService.call<Preferences>('PUT', urlPath, {}, payload);
  }
}