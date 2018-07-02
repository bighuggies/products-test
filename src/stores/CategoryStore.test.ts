import { GoustoClient } from '../api/GoustoClient';
import { ICategory } from '../api/models/Category';

import { CategoryStore } from './CategoryStore';

class FakeGoustoClient extends GoustoClient {
  public async fetchCategories() {
    return await [];
  }
}

test('fetched categories', () => {
  const { store, client } = createTestStore();

  const spy = spyOn(client, 'fetchCategories');

  store.fetchCategories();

  expect(spy).toHaveBeenCalledTimes(1);
});

test('set categories', () => {
  const { store } = createTestStore();
  const categories = new Array(2) as ICategory[];

  store.setCategories(categories);

  expect(store.categories.length).toBe(2);
});

test('select category by id', () => {
  const { store } = createTestStore([{ id: '1', title: '1', hidden: false }]);

  store.selectCategory('1');

  expect(store.currentCategoryId).toBe('1');
});

test('selected category id lookup', () => {
  const selectedCategory = { id: '1', title: '1', hidden: false };
  const { store } = createTestStore([selectedCategory]);

  store.selectCategory('1');

  expect(store.currentCategory).toEqual(selectedCategory);
});

test('inactive categories are filtered', () => {
  const categories = [
    { id: '1', title: '1', hidden: false },
    { id: '2', title: '2', hidden: true }
  ];
  const { store } = createTestStore(categories);

  expect(store.activeCategories.length).toBe(1);
});

test('inactive categories are not returned', () => {
  const categories = [
    { id: '1', title: '1', hidden: false },
    { id: '2', title: '2', hidden: true }
  ];
  const { store } = createTestStore(categories);

  expect(store.activeCategories).not.toContainEqual(categories[1]);
});

test('active categories are returned', () => {
  const categories = [
    { id: '1', title: '1', hidden: false },
    { id: '2', title: '2', hidden: true }
  ];
  const { store } = createTestStore(categories);

  expect(store.activeCategories).toContainEqual(categories[0]);
});

const createTestStore = (categories: ICategory[] = []) => {
  const client = new FakeGoustoClient();
  const store = new CategoryStore(client, categories);

  return { store, client };
};
