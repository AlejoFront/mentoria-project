import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import reportWebVitals from './reportWebVitals';
import App from 'App';
import store from 'store'
import { LanguageProvider } from 'shared/context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LanguageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </LanguageProvider>
  </React.StrictMode>
);

reportWebVitals();
