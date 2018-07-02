import { GoustoClient } from '../api/GoustoClient';

import { CategoryStore } from './CategoryStore';
import { ProductStore } from './ProductStore';

export class RootStore {
  constructor(goustoClient: GoustoClient = new GoustoClient()) {
    this[CategoryStore.STORE_NAME] = new CategoryStore(goustoClient);
    this[ProductStore.STORE_NAME] = new ProductStore(
      goustoClient,
      this[CategoryStore.STORE_NAME]
    );
  }
}
