import { Injectable } from '@nestjs/common';
import { v2 as cloudinary } from 'cloudinary';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class UploadService {
  constructor(private readonly prisma: PrismaService) {}

  async uploadImageAndSave(file: Express.Multer.File, entityType: 'product' | 'category' | 'business', entityId: string) {
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, res) => {
        if (error) return reject(error);
        resolve(res);
      }).end(file.buffer);
    });

    return this.prisma.image.create({
      data: {
        url: result.secure_url,
        name: result.original_filename,
        ...(entityType === 'product' && { productId: entityId }),
        ...(entityType === 'category' && { categoryId: entityId }),
        ...(entityType === 'business' && { businessId: entityId }),
      },
    });
  }
}
