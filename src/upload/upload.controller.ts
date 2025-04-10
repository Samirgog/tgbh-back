import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
  Body,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Post('image')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(
    @UploadedFile() file: Express.Multer.File,
    @Body('entityId') entityId: string,
    @Body('entityType') entityType: 'product' | 'category' | 'business',
  ) {
    const image = await this.uploadService.uploadImageAndSave(file, entityType, entityId);
    return image;
  }
}
