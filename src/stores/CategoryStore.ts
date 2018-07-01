import { action, computed, decorate, observable } from 'mobx';

import { ICategory } from '../models/Category';

export class CategoryStore {
  public static STORE_NAME = 'categoryStore';

  constructor(
    public categories: ICategory[] = [],
    public currentCategoryId?: string
  ) {}

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

  public get currentCategory() {
    return this.categories.find(c => c.id === this.currentCategoryId);
  }
}

decorate(CategoryStore, {
  activeCategories: computed,
  categories: observable,
  currentCategory: computed,
  currentCategoryId: observable,
  setCategories: action
});
