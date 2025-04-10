import { IsString, IsArray, IsOptional } from 'class-validator';

export class CreateOrderDto {
  @IsString()
  clientId: string;

  @IsString()
  businessId: string;

  @IsString()
  branchId: string;

  @IsArray()
  items: any[]; // уточни тип

  @IsString()
  status: string;
}
