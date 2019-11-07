import React from 'react';
import Routes from '../routes';
import { Navbar } from './nav';
import Notification from './notification';

const Main = () => (
  <div className="container">
    <div className="columns">
      <div className="col-12 col-sm-12 col-xs-12 col-md-12">
        <Navbar />
      </div>

    </div>
    <Notification />
    <div className="columns app-content" style={{marginTop:100}}>
      <Routes />
    </div>
  </div>
);

export default Main;
