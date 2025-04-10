import { IsString, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { PersonalInfoDto } from './personal-info.dto';

export class CreateBusinessDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsOptional()
  banner?: Express.Multer.File;

  @ValidateNested()
  @Type(() => PersonalInfoDto)
  personalInfo: PersonalInfoDto;
}
