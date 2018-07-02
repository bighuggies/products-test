import { action, computed, decorate, observable } from 'mobx';

import { GoustoClient } from '../api/GoustoClient';
import { ICategory } from '../api/models/Category';

export class CategoryStore {
  public static STORE_NAME = 'categoryStore';

  constructor(
    public goustoClient: GoustoClient = new GoustoClient(),
    public categories: ICategory[] = [],
    public currentCategoryId?: string
  ) {}

  public fetchCategories = async () => {
    const categories = await this.goustoClient.fetchCategories();

    this.setCategories(categories);
  };

  public setCategories = (categories: ICategory[]) => {
    this.categories = categories;
  };

  public selectCategory = (categoryId: string) => {
    this.currentCategoryId = categoryId;
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
  selectCategory: action,
  setCategories: action
});
