import React from 'react';
import Routes from '../routes';
import { Navbar } from './nav';

const Main = () => (
  <div className="container">
    <div className="columns">
      <div className="col-12 col-sm-12 col-xs-12 col-md-12">
        <Navbar />
      </div>

    </div>
    <div className="columns app-content">
      <Routes />
    </div>
  </div>
);

export default Main;
