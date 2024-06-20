import { Injectable } from '@angular/core';
import { Attribute } from '@appwrite/common';
import { DocumentList, SessionList, IdentityList, LogList, FileList, TeamList, MembershipList, ExecutionList, CountryList, ContinentList, LanguageList, CurrencyList, PhoneList, LocaleCodeList, Document, Log, User, AlgoMd5, AlgoSha, AlgoPhpass, AlgoBcrypt, AlgoScrypt, AlgoScryptModified, AlgoArgon2, Preferences, Session, Identity, Token, Jwt, Locale, LocaleCode, File as AWFile, Team, Membership, Execution, Country, Continent, Language, Currency, Phone, Headers, MfaChallenge, MfaRecoveryCodes, MfaType, MfaFactors, Subscriber, Target,  Payload, UploadProgress } from '@appwrite/common';
import { AppwriteException } from '../exceptions';
import { flatten, prepareSearchParams } from '../util';
import { AppwriteService } from './appwrite.service';

@Injectable()
export class AppwriteStorageService {
  constructor(private appwriteService: AppwriteService) {}

  /**
   * List files
   *
   * Get a list of all the user files. You can use the query params to filter
   * your results.
   *
   * @param {string} bucketId
   * @param {string[]} queries
   * @param {string} search
   * @throws {AppwriteException}
   * @returns Promise<FileList>
   */
  async listFiles(bucketId: string, queries?: string[], search?: string): Promise<FileList> {
    const urlPath = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
    const payload: Payload = {  queries, search,  };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    return this.appwriteService.call<FileList>('GET', urlPath, {}, payload);
  }

  /**
   * Create file
   *
   * Create a new file. Before using this route, you should create a new bucket
   * resource using either a [server
   * integration](https://appwrite.io/docs/server/storage#storageCreateBucket)
   * API or directly from your Appwrite console.
* 
* Larger files should be uploaded using multiple requests with the
   * [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range)
   * header to send a partial request with a maximum supported chunk of `5MB`.
   * The `content-range` header values should always be in bytes.
* 
* When the first request is sent, the server will return the **File** object,
   * and the subsequent part request must include the file's **id** in
   * `x-appwrite-id` header to allow the server to know that the partial upload
   * is for the existing file and not for a new one.
* 
* If you're creating a new file using one of the Appwrite SDKs, all the
   * chunking logic will be managed by the SDK internally.
* 
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @param {File} file
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns Promise<AWFile>
   */
  async createFile(bucketId: string, fileId: string, file: File, permissions?: string[], onProgress = (progress: UploadProgress) => {}): Promise<AWFile> {
    const urlPath = '/storage/buckets/{bucketId}/files'.replace('{bucketId}', bucketId);
    const payload: Payload = { fileId, file, permissions,   };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

    if (typeof file === 'undefined') {
      throw new AppwriteException('Missing required parameter: "file"');
    }


            if(!(file instanceof File)) {
                throw new AppwriteException('Parameter "file" has to be a File.');
            }

            const size = file.size;

            if (size <= AppwriteService.CHUNK_SIZE) {
                return await this.appwriteService.call('POST', urlPath, { 'content-type': 'multipart/form-data',
 }, payload);
            }
            let id = undefined;
            let response = undefined;

            const headers: { [header: string]: string } = {
                'content-type': 'multipart/form-data',
            }

            let counter = 0;
            const totalCounters = Math.ceil(size / AppwriteService.CHUNK_SIZE);
            if(fileId != 'unique()') {
                try {
                    response = await this.appwriteService.call('GET', new URL(this.appwriteService.config.endpoint + urlPath + '/' + fileId).toString(), headers);
                    counter = response.chunksUploaded;
                } catch(e) {
                }
            }

            for (counter; counter < totalCounters; counter++) {
                const start = (counter * AppwriteService.CHUNK_SIZE);
                const end = Math.min((((counter * AppwriteService.CHUNK_SIZE) + AppwriteService.CHUNK_SIZE) - 1), size);

                headers['content-range'] = 'bytes ' + start + '-' + end + '/' + size

                if (id) {
                    headers['x-appwrite-id'] = id;
                }

                const stream = file.slice(start, end + 1);
                payload['file'] = new File([stream], file.name);

                response = await this.appwriteService.call('POST', urlPath, headers, payload);

                if (!id) {
                    id = response['$id'];
                }

                if (onProgress) {
                    onProgress({
                        $id: response.$id,
                        progress: Math.min((counter + 1) * AppwriteService.CHUNK_SIZE - 1, size) / size * 100,
                        sizeUploaded: end,
                        chunksTotal: response.chunksTotal,
                        chunksUploaded: response.chunksUploaded
                    });
                }
            }

            return response;
  }

  /**
   * Get file
   *
   * Get a file by its unique ID. This endpoint response returns a JSON object
   * with the file metadata.
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @throws {AppwriteException}
   * @returns Promise<AWFile>
   */
  async getFile(bucketId: string, fileId: string): Promise<AWFile> {
    const urlPath = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
    const payload: Payload = {   };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

    return this.appwriteService.call<AWFile>('GET', urlPath, {}, payload);
  }

  /**
   * Update file
   *
   * Update a file by its unique ID. Only users with write permissions have
   * access to update this resource.
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @param {string} name
   * @param {string[]} permissions
   * @throws {AppwriteException}
   * @returns Promise<AWFile>
   */
  async updateFile(bucketId: string, fileId: string, name?: string, permissions?: string[]): Promise<AWFile> {
    const urlPath = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
    const payload: Payload = { name, permissions,   };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

    return this.appwriteService.call<AWFile>('PUT', urlPath, {}, payload);
  }

  /**
   * Delete File
   *
   * Delete a file by its unique ID. Only users with write permissions have
   * access to delete this resource.
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @throws {AppwriteException}
   * @returns Promise<void>
   */
  async deleteFile(bucketId: string, fileId: string): Promise<void> {
    const urlPath = '/storage/buckets/{bucketId}/files/{fileId}'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
    const payload: Payload = {   };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

    return this.appwriteService.call<void>('DELETE', urlPath, {}, payload);
  }

  /**
   * Get file for download
   *
   * Get a file content by its unique ID. The endpoint response return with a
   * 'Content-Disposition: attachment' header that tells the browser to start
   * downloading the file to user downloads directory.
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @throws {AppwriteException}
   * @returns URL
   */
  getFileDownload(bucketId: string, fileId: string): URL {
    const urlPath = '/storage/buckets/{bucketId}/files/{fileId}/download'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
    const payload: Payload = {   };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

            const uri = new URL(this.appwriteService.config.endpoint + urlPath);
            payload['project'] = this.appwriteService.config.project;
            prepareSearchParams(uri, payload);

            return uri;
  }

  /**
   * Get file preview
   *
   * Get a file preview image. Currently, this method supports preview for image
   * files (jpg, png, and gif), other supported formats, like pdf, docs, slides,
   * and spreadsheets, will return the file icon image. You can also pass query
   * string arguments for cutting and resizing your preview image. Preview is
   * supported only for image files smaller than 10MB.
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @param {number} width
   * @param {number} height
   * @param {string} gravity
   * @param {number} quality
   * @param {number} borderWidth
   * @param {string} borderColor
   * @param {number} borderRadius
   * @param {number} opacity
   * @param {number} rotation
   * @param {string} background
   * @param {string} output
   * @throws {AppwriteException}
   * @returns URL
   */
  getFilePreview(bucketId: string, fileId: string, width?: number, height?: number, gravity?: string, quality?: number, borderWidth?: number, borderColor?: string, borderRadius?: number, opacity?: number, rotation?: number, background?: string, output?: string): URL {
    const urlPath = '/storage/buckets/{bucketId}/files/{fileId}/preview'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
    const payload: Payload = {  width, height, gravity, quality, borderWidth, borderColor, borderRadius, opacity, rotation, background, output,  };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

            const uri = new URL(this.appwriteService.config.endpoint + urlPath);
            payload['project'] = this.appwriteService.config.project;
            prepareSearchParams(uri, payload);

            return uri;
  }

  /**
   * Get file for view
   *
   * Get a file content by its unique ID. This endpoint is similar to the
   * download method but returns with no  'Content-Disposition: attachment'
   * header.
   *
   * @param {string} bucketId
   * @param {string} fileId
   * @throws {AppwriteException}
   * @returns URL
   */
  getFileView(bucketId: string, fileId: string): URL {
    const urlPath = '/storage/buckets/{bucketId}/files/{fileId}/view'.replace('{bucketId}', bucketId).replace('{fileId}', fileId);
    const payload: Payload = {   };

    if (typeof bucketId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "bucketId"');
    }

    if (typeof fileId === 'undefined') {
      throw new AppwriteException('Missing required parameter: "fileId"');
    }

            const uri = new URL(this.appwriteService.config.endpoint + urlPath);
            payload['project'] = this.appwriteService.config.project;
            prepareSearchParams(uri, payload);

            return uri;
  }
}