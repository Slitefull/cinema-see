import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import App from './app/app';

import GlobalCSS from './global.css';


const client = new ApolloClient({
  uri: "http://localhost:3005/graphql/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <ApolloProvider client={client}>
        <GlobalCSS/>
        <App/>
      </ApolloProvider>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
