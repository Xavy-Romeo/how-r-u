import React from "react";
import '../src/App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Header from "./components/Header";
import Happy from "./components/Happy";
import Okay from "./components/Okay";
import Anxious from "./components/Anxious";
import Sad from "./components/Sad";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <ApolloProvider client={client}>
        <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/happy">
              <Happy/>
            </Route>
            <Route path="/okay">
              <Okay />
            </Route>
            <Route path="/anxious">
              <Anxious />
            </Route>
            <Route path="/sad">
              <Sad />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;