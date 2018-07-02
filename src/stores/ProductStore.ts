import { action, computed, decorate, observable } from 'mobx';

import { IProduct } from '../models/Product';

import { CategoryStore } from './CategoryStore';

export class ProductStore {
  public static STORE_NAME = 'productStore';

  constructor(
    public categoryStore: CategoryStore,
    public products: IProduct[] = [],
    public filter: string = ''
  ) {}

  public fetchProducts = async () => {
    const response = await fetch(
      'https://api.gousto.co.uk/products/v2.0/products?includes[]=categories&includes[]=attributes&sort=position&image_sizes[]=365&image_sizes[]=400&period_id=120'
    );
    const data = await response.json();

    this.setProducts(data.data);
  };

  public selectCategory = (categoryId: string) =>
    this.categoryStore.selectCategory(categoryId);

  public setProducts = (products: IProduct[]) => (this.products = products);

  public get categoryProducts(): IProduct[] {
    return this.categoryStore.currentCategoryId && this.products
      ? this.products.filter(p =>
          p.categories.some(c => c.id === this.categoryStore.currentCategoryId)
        )
      : [];
  }

  public get filteredCategoryProducts(): IProduct[] {
    return this.categoryProducts.filter(
      c =>
        !this.filter ||
        c.title.toLowerCase().includes(this.filter.toLowerCase()) ||
        c.description.toLowerCase().includes(this.filter.toLowerCase())
    );
  }
}

decorate(ProductStore, {
  categoryProducts: computed,
  filter: observable,
  filteredCategoryProducts: computed,
  products: observable,
  setProducts: action
});
