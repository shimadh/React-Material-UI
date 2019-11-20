import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import * as serviceWorker from "./serviceWorker";
import App from './Layouts/App';

const client = new ApolloClient({
  uri: "http://beegraphpapi.aiminaabee.com/beeapi"
});

const Main = (
  <ApolloProvider client={client}>
    <Router>
      <App></App>
    </Router>
  </ApolloProvider>
);

ReactDOM.render(Main, document.getElementById("root"));
serviceWorker.unregister();
