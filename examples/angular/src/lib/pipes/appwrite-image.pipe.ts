import { Pipe, PipeTransform } from '@angular/core';
import { AppwriteStorageService } from '../services';

interface Options {
  width?: number;
  height?: number;
  gravity?: 'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right';
  quality?: number;
  borderWidth?: number;
  borderColor?: string;
  borderRadius?: number;
  opacity?: number;
  rotation?: number;
  background?: string;
  output?: 'jpeg' | 'jpg' | 'png' | 'gif' | 'webp';
}

@Pipe({
  name: 'appwriteImage',
})
export class AppwriteImagePipe implements PipeTransform {
  constructor(private storage: AppwriteStorageService) {}

  transform(file: string, options: Options = {}): string {
    return this.storage
      .getFilePreview(
        'default',
        file,
        options.width,
        options.height,
        options.gravity,
        options.quality,
        options.borderWidth,
        options.borderColor,
        options.borderRadius,
        options.opacity,
        options.rotation,
        options.background,
        options.output
      )
      .toString();
  }
}
