import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

//Pages
import LoginPage from './Login';
import Home from '../Layouts/Home';
import Roles from './Roles';
import Users from './Users';
import Landing from './LandingPage/Landing';

const Routes = () => {
	const { token, userId } = useSelector(state => state.authReducer.login);

	return (
		<Switch>
			{!token && <Route exact path='/' component={Landing} />}
			{token && <Redirect from='/login' to='/home' exact />}
			{token && <Route path='/users' exact component={Users} exact />}
			{token && <Route path='/roles' exact component={Roles} exact />}
			{!token && <Route path='/login' exact component={LoginPage} />}
			{token && <Route path='/home' exact component={Home} />}
		</Switch>
	);
};

export default Routes;
