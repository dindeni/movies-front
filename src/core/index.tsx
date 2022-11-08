import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'core/App';

import { setupStore } from './store';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

const app = (
  <Provider store={setupStore()}>
    <App />
  </Provider>
);

root.render(app);
