import { IsBoolean, IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
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
