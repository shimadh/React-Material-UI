import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import { Provider } from 'react-redux';

import './Styles/index.css';
import Routes from './Pages';

//Imported store from store
import configureStore from './Store/store';
const reduxStore = configureStore();

const client = new ApolloClient({
	uri: 'http://beegraphpapi.aiminaabee.com/beeapi'
});

const App = (
	<BrowserRouter>
		<ApolloProvider client={client}>
			<Provider store={reduxStore}>
				<Routes></Routes>
			</Provider>
		</ApolloProvider>
	</BrowserRouter>
);

ReactDOM.render(App, document.getElementById('root'));
