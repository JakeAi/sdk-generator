import { Pipe, PipeTransform } from '@angular/core';
import { Document } from '@appwrite/common';
import { AppwriteDatabasesService } from '../services';

@Pipe({
  name: 'contentPipe',
})
export class AppwriteContentPipe implements PipeTransform {
  constructor(private documentsService: AppwriteDatabasesService) {}

  transform<T = any>(id: string | string[] = [], databaseId: string, collectionId: string): Promise<Document<T>[]> {
    return Promise.all([].concat(id).map((i) => this.documentsService.getDocument<T>(databaseId, collectionId, i)));
  }
}
