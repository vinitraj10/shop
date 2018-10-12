import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import CartLink from './cartlink';
import ProfileLink from './profilelink';

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
          <ProfileLink />
          <Link to="/myorders" className="btn btn-link link">
            My orders
          </Link>
          <CartLink />
          <a
            onClick={this.handleLogout.bind(this)}
            className="btn btn-link link"
          >
            Logout
          </a>
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
