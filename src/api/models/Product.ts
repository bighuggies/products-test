import { ICategory } from './Category';

export interface IProduct {
  id: string;
  title: string;
  description: string;
  categories: ICategory[];
}
