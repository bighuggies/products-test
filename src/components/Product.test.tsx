import { mount } from 'enzyme';
import * as React from 'react';

import Product from './Product';

test('renders without crashing', () => {
  const mounted = mount(
    <Product
      product={{ id: '1', title: 'p1', description: 'p1', categories: [] }}
    />
  );

  expect(mounted.debug()).toMatchSnapshot();
});

test('sets aria-expanded true when visible', () => {
  const mounted = mount(
    <Product
      product={{ id: '1', title: 'p1', description: 'p1', categories: [] }}
    />
  );

  mounted.setState({ isDescriptionShowing: true });

  expect(mounted.debug()).toMatchSnapshot();
});

test('sets aria-expanded false when not visible', () => {
  const mounted = mount(
    <Product
      product={{ id: '1', title: 'p1', description: 'p1', categories: [] }}
    />
  );

  mounted.setState({ isDescriptionShowing: false });

  expect(mounted.debug()).toMatchSnapshot();
});
