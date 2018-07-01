import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import * as React from 'react';

import App from './App';
import { RootStore } from './stores/RootStore';

test('renders without crashing', () => {
  const mounted = mount(
    <Provider {...new RootStore()}>
      <App />
    </Provider>
  );

  expect(mounted.debug()).toMatchSnapshot();
});
