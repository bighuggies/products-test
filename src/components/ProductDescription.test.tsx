import { mount } from 'enzyme';
import * as React from 'react';

import ProductDescription from './ProductDescription';

test('renders without crashing', () => {
  const mounted = mount(
    <ProductDescription id={'id1'} description={'hello world'} />
  );

  expect(mounted.debug()).toMatchSnapshot();
});
