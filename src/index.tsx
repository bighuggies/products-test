import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import CategoriesContainer from './containers/CategoriesContainer';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { RootStore } from './stores/RootStore';

ReactDOM.render(
  <Provider {...new RootStore()}>
    <CategoriesContainer />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
