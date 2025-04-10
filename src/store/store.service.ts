import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';

@Injectable()
export class StoreService {
  constructor(private readonly prisma: PrismaService) {}

  create(businessId: string, dto: CreateStoreDto) {
    return this.prisma.store.create({
      data: {
        ...dto,
        business: { connect: { id: businessId } },
      },
    });
  }

  findOne(storeId: string) {
    return this.prisma.store.findUnique({
      where: { id: storeId },
      include: { business: true },
    });
  }

  update(storeId: string, dto: UpdateStoreDto) {
    return this.prisma.store.update({
      where: { id: storeId },
      data: dto,
    });
  }
}
