import { Controller, Get, Param } from '@nestjs/common';
import { CatalogService } from './catalog.service';

@Controller('catalog')
export class CatalogController {
  constructor(private readonly catalogService: CatalogService) {}

  @Get(':storeId')
  findByStore(@Param('storeId') storeId: string) {
    return this.catalogService.findByStore(storeId);
  }
}
