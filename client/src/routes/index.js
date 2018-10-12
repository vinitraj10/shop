import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import {
		Signin,
		Signup,
		Cart,
		Store,
		ViewStore,
		Mytransactions,
		Review,
		Profile,
		ViewProduct
} from '../components';
import requireAuth from '../components/hoc/authenticate';

class Routes extends Component {
	render() {
		const { location } = this.props;
		return (
			<Switch location={location}>
				<Route exact path="/" component={requireAuth(Store)} />
				<Route path="/signin" component={Signin} />
				<Route path="/signup" component={Signup} />
				<Route path="/store/:id" component={requireAuth(ViewStore)} />
				<Route path="/cart" component={requireAuth(Cart)} />
				<Route path="/myorders" component={requireAuth(Mytransactions)} />
				<Route path="/add/review/:id" component={requireAuth(Review)} />
				<Route path="/profile" component={requireAuth(Profile)} />
				<Route path='/product/:id' component={ViewProduct} />
			</Switch>
		);
	}
}
export default withRouter(Routes);
