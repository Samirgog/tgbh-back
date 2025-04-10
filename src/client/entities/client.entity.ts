export class Client {
  id: string;
  tgUserId: string;
  paymentMethods: string[];
  addresses: Address[];
  createdAt: Date;
  updatedAt: Date;
}

export class Address {
  id: string;
  street: string;
  city: string;
  zipCode: string;
  country: string;
}
