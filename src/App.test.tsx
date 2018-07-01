import { mount } from 'enzyme';
import * as React from 'react';

import App from './App';
import { CategoryStore } from './stores/CategoryStore';

test('renders without crashing', () => {
  const mounted = mount(<App categoryStore={new CategoryStore()} />);

  expect(mounted.debug()).toMatchSnapshot();
});
