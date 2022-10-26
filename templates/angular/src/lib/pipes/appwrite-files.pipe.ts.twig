import { Pipe, PipeTransform } from '@angular/core';
import { File } from '@appwrite/common';
import { AppwriteStorageService } from '../services';

@Pipe({
  name: 'appwriteFiles',
})
export class AppwriteFilesPipe implements PipeTransform {
  constructor(private storage: AppwriteStorageService) {}

  transform(files: string[] = []): Promise<File[]> {
    return Promise.all(files.map((fileId) => this.storage.getFile('default', fileId)));
  }
}
