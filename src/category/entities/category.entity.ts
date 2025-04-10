export class Category {
  id: string;
  name: string;
  priority: number;
  image?: {
    url: string | null;
    name: string;
  };
  catalogId: string;
}
