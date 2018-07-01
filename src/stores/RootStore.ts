import { CategoryStore } from './CategoryStore';
import { ProductStore } from './ProductStore';

export class RootStore {
  constructor() {
    this[CategoryStore.STORE_NAME] = new CategoryStore();
    this[ProductStore.STORE_NAME] = new ProductStore(
      this[CategoryStore.STORE_NAME]
    );
  }
}
