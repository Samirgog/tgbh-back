import { Module } from '@nestjs/common';
import { PrismaModule } from '@/prisma/prisma.module';
import { BusinessModule } from '@/src/business/business.module';
import { UsersModule } from '@/src/users/users.module';
import { CatalogModule } from '@/src/catalog/catalog.module';
import { CategoryModule } from '@/src/category/category.module';
import { StoreModule } from '@/src/store/store.module';
import { UploadModule } from './upload/upload.module';

@Module({
  imports: [PrismaModule, UsersModule, BusinessModule, CatalogModule, CategoryModule, StoreModule, UploadModule],
})
export class AppModule {}
