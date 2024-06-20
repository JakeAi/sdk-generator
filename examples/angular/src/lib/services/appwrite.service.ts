import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Headers, HttpMethods, Payload } from '@appwrite/common';
import { firstValueFrom } from 'rxjs';
import { AppwriteOptions } from '../appwrite-angular.module';
import { AppwriteException } from '../exceptions';
import { APPWRITE_LOCATION_PROVIDER_TOKEN, APPWRITE_OPTIONS_TOKEN } from '../tokens';
import { prepareFormData, prepareSearchParams } from '../util';

@Injectable()
export class AppwriteService {
  static CHUNK_SIZE = 5 * 1024 * 1024; // 5MB

  config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    endpointRealtime: '',
    database: '',
    project: '',
    jwt: '',
    locale: '',
    session: '',
  }
  headers: Headers = {
    'x-sdk-name': 'Angular',
    'x-sdk-platform': 'client',
    'x-sdk-language': 'angular',
    'x-sdk-version': '12.0.0',
    'X-Appwrite-Response-Format': '1.5.0',
  }

  constructor(
    @Inject(APPWRITE_OPTIONS_TOKEN) public appwriteOptions: AppwriteOptions['config'],
    @Inject(APPWRITE_LOCATION_PROVIDER_TOKEN) public locationProvider,
    private http: HttpClient
  ) {
    if (!appwriteOptions || !appwriteOptions.endpointUrl || !appwriteOptions.endpointUrl) {
      throw new Error('You are missing required config properties');
    }
    this.config.database = appwriteOptions.database;
    this.config.endpoint = appwriteOptions.endpointUrl;
    this.config.project = appwriteOptions.projectId;
    this.setEndpoint(appwriteOptions.endpointUrl).setProject(appwriteOptions.projectId);
  }

  /**
   * Set Endpoint
   *
   * Your project endpoint
   *
   * @param {string} endpoint
   *
   * @returns {this}
   */
  setEndpoint(endpoint: string): this {
    this.config.endpoint = endpoint;
    this.config.endpointRealtime = this.config.endpointRealtime || this.config.endpoint.replace('https://', 'wss://').replace('http://', 'ws://');

    return this;
  }

  /**
   * Set Realtime Endpoint
   *
   * @param {string} endpointRealtime
   *
   * @returns {this}
   */
  setEndpointRealtime(endpointRealtime: string): this {
    this.config.endpointRealtime = endpointRealtime;

    return this;
  }

   /**
   * Set Project
   *
* Your project ID
   *
   * @param project string
   *
   * @return {this}
   */
  setProject(project: string): this {
    this.headers['X-Appwrite-Project'] = project;
    this.config.project = project;
    return this;
  }

  /**
   * Set JWT
   *
* Your secret JSON Web Token
   *
   * @param jwt string
   *
   * @return {this}
   */
  setJWT(jwt: string): this {
    this.headers['X-Appwrite-JWT'] = jwt;
    this.config.jwt = jwt;
    return this;
  }

  /**
   * Set Locale
   *
   * @param locale string
   *
   * @return {this}
   */
  setLocale(locale: string): this {
    this.headers['X-Appwrite-Locale'] = locale;
    this.config.locale = locale;
    return this;
  }

  /**
   * Set Session
   *
* The user session to authenticate with
   *
   * @param session string
   *
   * @return {this}
   */
  setSession(session: string): this {
    this.headers['X-Appwrite-Session'] = session;
    this.config.session = session;
    return this;
  }


  public async call<T>(method: HttpMethods, path: string, headers: Headers = {}, params: Payload = {}): Promise<T> {
    const url = new URL(this.config.endpoint + path);
    let body: any;
    headers = { 'content-type': 'application/json', ...this.headers, ...headers };
    headers['X-Fallback-Cookies'] = this.appwriteOptions?.tokenGetter('cookieFallback');

    // Clean up undefined params
    Object.keys(params).forEach((key) => (params[key] === undefined ? delete params[key] : {}));

    if (method === 'GET') {
      prepareSearchParams(url, params);
    } else {
      switch (headers['content-type']) {
        case 'application/json': {
          body = JSON.stringify(params);
          break;
        }
        case 'multipart/form-data': {
          const formData = new FormData();
          body = prepareFormData(formData, params);
          delete headers['content-type'];
          break;
        }
      }
    }

    try {
      const response: HttpResponse<T> = await firstValueFrom(
        this.http.request<T>(method, decodeURIComponent(url.toString()), {
          body,
          headers: headers,
          observe: 'response',
          withCredentials: true
        })
      );
      let data: any | { message: string } = null;
      if (response.headers.get('content-type')?.includes('application/json')) {
        data = response.body;
      } else {
        data = {
          message: response.body
        };
      }
      if (response.status >= 400) {
        throw new AppwriteException(data?.message, response.status, data?.type, data);
      }

      const cookieFallback = response.headers.get('X-Fallback-Cookies');
      if (cookieFallback) {
        console.warn('Appwrite is using localStorage for session management. Increase your security by adding a custom domain as your API endpoint.');
        this.appwriteOptions?.tokenSetter('cookieFallback', cookieFallback);
      }

      return data;
    } catch (e) {
      console.error(e);
      if (e instanceof HttpErrorResponse) {
        throw new AppwriteException(e.error.message, e.error.code);
      }
      throw e;
    }
  }
}