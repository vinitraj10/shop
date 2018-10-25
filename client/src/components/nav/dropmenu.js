import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ProfileLink from './profilelink';

class DropMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
  }
  componentDidUpdate(prevProps) {
      console.log(prevProps.location);
      console.log(this.props.location);
    }

  reset() {
    console.log('route changed');
  }
  loadMenu() {
    this.setState(() => (
      {
        showMenu: !this.state.showMenu
      }
    ));
  }
  render() {
    const { showMenu } = this.state;
    if (showMenu) {
      return (
        <div className="menu-container">
        <i className="fas fa-align-justify" onClick={this.loadMenu.bind(this)} />
          <ul className="menu">
            <li className="menu-item">
              <ProfileLink />
            </li>
            <li className="menu-item"><a href="#menus">My orders</a></li>
            <li className="menu-item">
              <a onClick={this.props.logout}>Logout</a>
            </li>
          </ul>
        </div>
      );
    }
    return (
      <i className="fas fa-align-justify" onClick={this.loadMenu.bind(this)} />
    );
  }
}

DropMenu = withRouter(DropMenu);

export default DropMenu;
