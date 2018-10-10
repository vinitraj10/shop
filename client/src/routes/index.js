import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { Signin, Signup, Cart, Store } from '../components';
import requireAuth from '../components/hoc/authenticate';

class Routes extends Component {
	render() {
		const { location } = this.props;
		return (
			<Switch location={location}>
				<Route exact path="/" component={requireAuth(Store)} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/cart" component={requireAuth(Cart)} />
			</Switch>
		);
	}
}
export default withRouter(Routes);
