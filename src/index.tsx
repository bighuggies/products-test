import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'mobx-react';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { RootStore } from './stores/RootStore';

ReactDOM.render(
  <Provider {...new RootStore()}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
