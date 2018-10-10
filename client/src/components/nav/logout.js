import React from 'react';

const Logout = (props) => (
  <section className="navbar-section">
    <a onClick={props.logout} className="btn btn-link link">Logout</a>
  </section>
);

export default Logout;
