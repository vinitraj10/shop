import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signout } from '../../actions/auth';
import NavLinks from './navlinks';
import './css/nav.css';

class Navbar extends Component {
  render() {
    const { authenticated } = this.props.auth;
    return (
      <header className="navbar">
        <section className="navbar-section">
          <Link to="/" className="navbar-brand">CPGSHOP</Link>
        </section>
        <section className="navbar-center">
          {/*<div className="input-group input-inline">
            <input className="form-input" type="text" placeholder="search" />
            <button className="btn btn-primary input-group-btn">Search</button>
          </div>*/}
        </section>

        <NavLinks authenticated={authenticated} logout={this.props.signout} />
      </header>
    );
  }
}


function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { signout })(Navbar);
