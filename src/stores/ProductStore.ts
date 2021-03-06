import { action, computed, decorate, observable } from 'mobx';

import { GoustoClient } from '../api/GoustoClient';
import { IProduct } from '../api/models/Product';

import { CategoryStore } from './CategoryStore';

export class ProductStore {
  public static STORE_NAME = 'productStore';

  constructor(
    public goustoClient: GoustoClient,
    public categoryStore: CategoryStore,
    public products: IProduct[] = [],
    public filter: string = ''
  ) {}

  public fetchProducts = async () => {
    const products = await this.goustoClient.fetchProducts();

    this.setProducts(products);
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
