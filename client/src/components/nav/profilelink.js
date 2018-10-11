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
      const imgUrl = `http://localhost:8000${profile.propic}`;
      return (
        <Link to="/profile">
          <figure className="avatar avatar-lg">
            <img src={imgUrl} alt="..." />
          </figure>
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
