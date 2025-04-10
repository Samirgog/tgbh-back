import { IsNotEmpty, IsOptional, IsString, IsInt, IsObject } from 'class-validator';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsInt()
  priority: number;

  @IsOptional()
  @IsObject()
  image?: {
    url: string | null;
    name: string;
  };

  @IsString()
  catalogId: string;
}
