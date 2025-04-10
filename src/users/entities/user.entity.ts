import { User } from '@prisma/client';

export class UserEntity implements User {
  id: string;
  telegramId: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  email: string;
  isCompanyOwner: boolean;
  acceptedTerms: boolean;
  username: string | null;
  phone: string | null;
  createdAt: Date;
  updatedAt: Date;
}
