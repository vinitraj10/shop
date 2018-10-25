import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadProfile } from '../../actions/app';

class ProfileLink extends Component {
  componentDidMount() {
    this.props.loadProfile(this.props.auth.username);
  }
  render() {
    const { profile } = this.props.profile;
    if (profile) {
      let imgUrl = '';
      if (profile.propic !== '') {
        imgUrl = `http://localhost:8000${profile.propic}`;
      } else {
        imgUrl = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/profile-icon.png';
      }
      return (
        <Link to="/profile">
          <div className="tile tile-centered">
            <figure className="avatar avatar-sm">
              <img src={imgUrl} alt="..." />
            </figure>
            <div className="tile-content">{this.props.auth.username}</div>
          </div>
        </Link>
      );
    }
    return (
      <React.Fragment />
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    auth: state.auth,
  };
}
export default connect(mapStateToProps, { loadProfile })(ProfileLink);
