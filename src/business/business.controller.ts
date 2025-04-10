import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Patch,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { UpdateBusinessDto } from './dto/update-business.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('business')
export class BusinessController {
  constructor(private readonly businessService: BusinessService) {}

  @Get('user/:userId')
  findAllForUser(@Param('userId') userId: string) {
    return this.businessService.findAllForUser(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.businessService.findOne(id);
  }

  @Post()
  create(@Body() dto: CreateBusinessDto) {
    return this.businessService.create(dto);
  }

  @Post()
  @UseInterceptors(FileInterceptor('banner'))
  createBusiness(
    @Body() dto: CreateBusinessDto,
    @UploadedFile() banner?: Express.Multer.File,
  ) {
    return this.businessService.create(dto, banner);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('banner'))
  update(
    @Param('id') id: string,
    @Body() dto: UpdateBusinessDto,
    @UploadedFile() banner?: Express.Multer.File,
  ) {
    return this.businessService.update(id, dto, banner);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.businessService.remove(id);
  }
}
