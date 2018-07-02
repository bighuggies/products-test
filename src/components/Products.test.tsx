import { mount } from 'enzyme';
import * as React from 'react';

import Products from './Products';

// tslint:disable no-empty
const noop = () => {};

test('renders without crashing', () => {
  const mounted = mount(
    <Products
      products={[{ id: '1', description: '1', title: '1', categories: [] }]}
      filter={''}
      onFilter={noop}
    />
  );

  expect(mounted.debug()).toMatchSnapshot();
});

test('renders correctly without products', () => {
  const mounted = mount(<Products products={[]} filter={''} onFilter={noop} />);

  expect(mounted.debug()).toMatchSnapshot();
});
