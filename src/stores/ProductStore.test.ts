import { GoustoClient } from '../api/GoustoClient';
import { IProduct } from '../api/models/Product';

import { CategoryStore } from './CategoryStore';
import { ProductStore } from './ProductStore';

class FakeGoustoClient extends GoustoClient {
  public async fetchProducts() {
    return await [];
  }
}

test('fetched products', () => {
  const { store, client } = createTestStore();

  const spy = spyOn(client, 'fetchProducts');

  store.fetchProducts();

  expect(spy).toHaveBeenCalledTimes(1);
});

test('set products', () => {
  const { store } = createTestStore();
  const products = new Array(2) as IProduct[];

  store.setProducts(products);

  expect(store.products.length).toBe(2);
});

test('products are returned for current category', () => {
  const products = [createProduct('p1', ['c1']), createProduct('p2', ['c2'])];
  const { store } = createTestStore(products);

  store.selectCategory('c2');

  expect(store.categoryProducts).toContainEqual(products[1]);
  expect(store.categoryProducts).not.toContainEqual(products[0]);
});

test('products are returned when name matches filter exactly', () => {
  const products = [createProduct('p1', ['c1']), createProduct('p2', ['c1'])];
  const { store } = createTestStore(products);

  store.selectCategory('c1');
  store.filter = 'p2';

  expect(store.filteredCategoryProducts).toContainEqual(products[1]);
  expect(store.filteredCategoryProducts).not.toContainEqual(products[0]);
});

test('products are returned when name matches filter with different case', () => {
  const products = [createProduct('p1', ['c1']), createProduct('p2', ['c1'])];
  const { store } = createTestStore(products);

  store.selectCategory('c1');
  store.filter = 'P2';

  expect(store.filteredCategoryProducts).toContainEqual(products[1]);
  expect(store.filteredCategoryProducts).not.toContainEqual(products[0]);
});

test('products are returned when description matches filter exactly', () => {
  const products = [
    createProduct('p1', ['c1']),
    createProduct('p2', ['c1'], 'MATCH')
  ];
  const { store } = createTestStore(products);

  store.selectCategory('c1');
  store.filter = 'MATCH';

  expect(store.filteredCategoryProducts).toContainEqual(products[1]);
  expect(store.filteredCategoryProducts).not.toContainEqual(products[0]);
});

test('products are returned when description matches filter with different case', () => {
  const products = [
    createProduct('p1', ['c1']),
    createProduct('p2', ['c1'], 'MATCH')
  ];
  const { store } = createTestStore(products);

  store.selectCategory('c1');
  store.filter = 'match';

  expect(store.filteredCategoryProducts).toContainEqual(products[1]);
  expect(store.filteredCategoryProducts).not.toContainEqual(products[0]);
});

const createTestStore = (products: IProduct[] = []) => {
  const client = new FakeGoustoClient();
  const categoryStore = new CategoryStore(client);
  const store = new ProductStore(client, categoryStore, products);

  return { store, categoryStore, client };
};

const createProduct = (
  id: string,
  categories: string[],
  description?: string
) => {
  return {
    categories: categories.map(c => ({ id: c, title: 'test', hidden: false })),
    description: description || id,
    id,
    title: id
  };
};
