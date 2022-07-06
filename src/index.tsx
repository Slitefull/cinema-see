import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import PlanetLoader from "@/ui-kit/components/loaders/planet";
import App from './app/app';


const client = new ApolloClient({
  uri: "http://localhost:3005/graphql/",
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Suspense fallback={<PlanetLoader/>}>
      <ApolloProvider client={client}>
        <App/>
      </ApolloProvider>
    </Suspense>
  </React.StrictMode>
);

reportWebVitals();
