export type Price = {
  amount?: number;
  currency: string;
};

export class Product {
  id: string;
  name: string;
  description?: string;
  image?: {
    url: string | null;
    name: string;
  };
  price?: Price;
  parameters?: { text: string; price?: Price }[];
  categoryId: string;
}
