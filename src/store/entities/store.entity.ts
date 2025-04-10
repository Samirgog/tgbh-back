import { Business, Store as PrismaStore } from '@prisma/client';

export class Store implements PrismaStore {
  id: string;
  theme: any;
  businessId: string;
  paymentTypes: string[];
  paymentConditions: string[];
  receiveWays: string[];
  createdAt: Date;
  updatedAt: Date;
}
