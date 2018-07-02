import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import * as React from 'react';

import { RootStore } from '../stores/RootStore';

import CategoriesContainer from './CategoriesContainer';

test('renders without crashing', () => {
  const mounted = mount(
    <Provider {...new RootStore()}>
      <CategoriesContainer />
    </Provider>
  );

  expect(mounted.debug()).toMatchSnapshot();
});
