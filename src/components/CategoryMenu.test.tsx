import { mount } from 'enzyme';
import * as React from 'react';
import { MemoryRouter } from 'react-router-dom';

import CategoryMenu from './CategoryMenu';

test('renders without crashing', () => {
  const mounted = mount(
    <MemoryRouter keyLength={0}>
      <CategoryMenu categories={[{ id: '1', title: '1', hidden: false }]} />
    </MemoryRouter>
  );

  expect(mounted.debug()).toMatchSnapshot();
});
