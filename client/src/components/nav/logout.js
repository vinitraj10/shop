import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Logout extends Component {
  render() {
    return (
        <section className="navbar-section">
          <a onClick={this.props.logout} className="btn btn-link link">
            fjhfjh
          </a>
          <Link to="/cart">Cart</Link>
        </section>
    );
  }
}

export default Logout;
