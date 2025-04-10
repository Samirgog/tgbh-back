import {
  IsNotEmpty,
  IsOptional,
  IsString,
  IsObject,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';

class PriceDto {
  @IsOptional()
  amount?: number;

  @IsString()
  currency: string;
}

class ParameterDto {
  @IsString()
  text: string;

  @IsOptional()
  @ValidateNested()
  @Type(() => PriceDto)
  price?: PriceDto;
}

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsObject()
  image?: {
    url: string | null;
    name: string;
  };

  @IsOptional()
  @ValidateNested()
  @Type(() => PriceDto)
  price?: PriceDto;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ParameterDto)
  parameters?: ParameterDto[];

  @IsString()
  categoryId: string;
}
