import { IProduct } from './Product';

import { ICategory } from './Category';

export class GoustoClient {
  public async fetchCategories(): Promise<ICategory[]> {
    const response = await fetch(
      'https://api.gousto.co.uk/products/v2.0/categories'
    );

    const data = await response.json();

    return data.data || [];
  }

  public async fetchProducts(): Promise<IProduct[]> {
    const response = await fetch(
      'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120'
    );

    const data = await response.json();

    return data.data || [];
  }
}
