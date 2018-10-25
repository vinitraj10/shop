import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CartLink from './cartlink';
import NavNotifications from './navnotifications';
import DropMenu from './dropmenu';

class NavLinks extends Component {
  constructor() {
    super();
    this.handleLogout = this.handleLogout.bind(this);
  }
  handleLogout() {
    this.props.logout(() => {
        this.props.history.push('/signin');
      });
  }
  render() {
    const { authenticated } = this.props;
    if (authenticated) {
      return (
        <section className="navbar-section">
          <NavNotifications />
          <CartLink />
          <DropMenu logout={this.handleLogout} />
        </section>
      );
    }
    return (
      <section className="navbar-section">
        <Link to="/signin" className="btn btn-link link">Signin</Link>
        <Link to="/signup" className="btn btn-link link">Signup</Link>
      </section>
    );
  }
}

NavLinks = withRouter(NavLinks);


export default NavLinks;
