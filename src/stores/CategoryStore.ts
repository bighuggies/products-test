import { action, computed, decorate, observable } from 'mobx';

import { ICategory } from '../models/Category';

export class CategoryStore {
  public static STORE_NAME = 'categoryStore';

  constructor(public categories: ICategory[] = []) {}

  public fetchCategories = async () => {
    const response = await fetch(
      'https://api.gousto.co.uk/products/v2.0/categories'
    );

    const data = await response.json();

    this.setCategories(data.data);
  };

  public setCategories = (categories: ICategory[]) => {
    this.categories = categories;
  };

  public get activeCategories() {
    return this.categories.filter(c => !c.hidden);
  }

  public getCategory = (categoryId: string): ICategory | undefined =>
    this.categories.find(c => c.id === categoryId);
}

decorate(CategoryStore, {
  activeCategories: computed,
  categories: observable,
  setCategories: action
});
