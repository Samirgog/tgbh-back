import { IsString, IsEmail, IsBoolean, IsOptional } from 'class-validator';

export class PersonalInfoDto {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsOptional()
  @IsString()
  middleName?: string;

  @IsEmail()
  email: string;

  @IsBoolean()
  isCompanyOwner: boolean;

  @IsBoolean()
  acceptedTerms: boolean;
}