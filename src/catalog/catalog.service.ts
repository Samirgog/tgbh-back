import { Injectable } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';

@Injectable()
export class CatalogService {
  constructor(private readonly prisma: PrismaService) {}

  findByStore(storeId: string) {
    return this.prisma.catalog.findFirst({
      where: { storeId },
      include: { categories: { include: { products: true } } },
    });
  }
}
