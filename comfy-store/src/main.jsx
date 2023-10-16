import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Toaster } from 'sonner';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain='comfy-store.us.auth0.com'
      clientId='rSrNpBfDXttaPCeJwTUdQK098cvZGbFb'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      cacheLocation='localstorage'
    >
      <Provider store={store}>
        <Toaster richColors position='top-center' />

        <App />
      </Provider>
    </Auth0Provider>
  </React.StrictMode>
);
