import { Pipe, PipeTransform } from '@angular/core';
import { AppwriteStorageService } from '../services';

@Pipe({
  name: 'appwriteFileDownload',
})
export class AppwriteFileDownloadPipe implements PipeTransform {
  constructor(private storage: AppwriteStorageService) {}

  transform(fileId: string): string {
    return this.storage.getFileDownload('default', fileId).toString();
  }
}
