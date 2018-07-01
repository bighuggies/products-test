import { mount } from 'enzyme';
import * as React from 'react';

import App from './App';

test('renders without crashing', () => {
  const mounted = mount(<App />);

  expect(mounted.debug()).toMatchSnapshot();
});
