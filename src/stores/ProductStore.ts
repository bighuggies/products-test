import { action, computed, decorate, observable } from 'mobx';

import { IProduct } from '../models/Product';

import { CategoryStore } from './CategoryStore';

export class ProductStore {
  public static STORE_NAME = 'productStore';

  constructor(
    public categoryStore: CategoryStore,
    public products: IProduct[] = []
  ) {}

  public fetchProducts = async () => {
    const response = await fetch(
      'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120'
    );
    const data = await response.json();

    this.setProducts(data.data);
  };

  public setProducts = (products: IProduct[]) => {
    this.products = products;
  };

  public get categoryProducts(): IProduct[] {
    return this.categoryStore.currentCategoryId && this.products
      ? this.products.filter(p =>
          p.categories.some(c => c.id === this.categoryStore.currentCategoryId)
        )
      : [];
  }
}

decorate(ProductStore, {
  categoryProducts: computed,
  products: observable,
  setProducts: action
});
