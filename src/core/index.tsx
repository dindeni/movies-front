import { App } from 'core/App';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { store } from './store/store';

const container = document.getElementById('root') as Element;
const root = createRoot(container);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

root.render(app);
