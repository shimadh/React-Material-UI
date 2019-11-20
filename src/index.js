import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";

import './Styles/index.css';
import AuthContext from './Context/AuthContext';

import Routes from './Pages';

const client = new ApolloClient({
  uri: "http://beegraphpapi.aiminaabee.com/beeapi"
});

const App = (
  <ApolloProvider client={client}>
    <BrowserRouter>
    <AuthContext.Provider>
      <Routes></Routes>
    </AuthContext.Provider>
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(App, document.getElementById("root"));
