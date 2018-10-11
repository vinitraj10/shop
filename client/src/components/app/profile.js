import React, { Component } from 'react';
import { connect } from 'react-redux';


class Profile extends Component {
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
        <div className="card">
          <div className="card-image">
            <img src={imgUrl} className="img-responsive" alt="profile" />
          </div>
          <div className="card-header">
            <div className="card-title h5">{profile.username}</div>
            <div className="card-subtitle text-gray">{profile.email}</div>
          </div>
          <div className="card-footer">
            <div className="card-title h6">Wallet: ₹ {profile.wallet}</div>
          </div>
        </div>
      );
    }
    return (
      <React.Fragment / >
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
