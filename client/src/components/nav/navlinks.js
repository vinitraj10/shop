import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CartLink from './cartlink';

class NavLinks extends Component {
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
          <a
            onClick={this.handleLogout.bind(this)}
            className="btn btn-link link"
          >
            Logout
          </a>
          <CartLink />
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
