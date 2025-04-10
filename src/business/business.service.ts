import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { v2 as cloudinary } from 'cloudinary';

@Injectable()
export class BusinessService {
  constructor(private readonly prisma: PrismaService) {}

  async findAllForUser(userId: string) {
    return this.prisma.business.findMany({
      where: { ownerId: userId },
      include: {
        stores: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.business.findUnique({
      where: { id },
      include: {
        stores: true,
      },
    });
  }

  async uploadBanner(file: Express.Multer.File) {
    const result = await new Promise<any>((resolve, reject) => {
      cloudinary.uploader.upload_stream({ resource_type: 'image' }, (error, res) => {
        if (error) return reject(error);
        resolve(res);
      }).end(file.buffer);
    });

    return {
      name: result.original_filename,
      url: result.secure_url,
      publicId: result.public_id,
    };
  }

  async deleteBanner(publicId: string) {
    await cloudinary.uploader.destroy(publicId);
  }

  async create(dto: CreateBusinessDto, banner?: Express.Multer.File) {
    let bannerData = null;

    if (banner) {
      bannerData = await this.uploadBanner(banner);
    }

    return this.prisma.business.create({
      data: {
        name: dto.name,
        description: dto.description,
        personalInfo: {
          create: dto.personalInfo,
        },
        banner: bannerData,
        moderationStatus: 'PENDING',
      },
    });
  }

  async update(id: string, dto: UpdateBusinessDto, banner?: Express.Multer.File) {
    const existing = await this.prisma.business.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException('Business not found');

    let bannerData = existing.banner as any;

    if (banner) {
      if (bannerData?.publicId) {
        await this.deleteBanner(bannerData.publicId);
      }
      bannerData = await this.uploadBanner(banner);
    }

    return this.prisma.business.update({
      where: { id },
      data: {
        name: dto.name,
        description: dto.description,
        banner: bannerData,
        moderationStatus: 'PENDING',
      },
    });
  }

  async remove(id: string) {
    return this.prisma.business.delete({
      where: { id },
    });
  }
}
