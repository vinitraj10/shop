import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enroll, checkEnrollment } from '../../actions/app';
import EnrollButton from './enrollbutton';

class Background extends Component {
  componentDidMount() {
    this.props.checkEnrollment(this.props.lid, this.props.auth.username);
  }
  enrollNow() {
    const username = localStorage.getItem('username');
    this.props.enroll(username, this.props.lid);
  }
  render() {
    const { enrolled } = this.props.loyalty;
    console.log(enrolled);
    return (
      <React.Fragment>
        <h1 className="text-center">
          {this.props.name}
        </h1>
        <h6 className="text-center">
          <small className="label text-center">
            {this.props.lpg} - {this.props.lpgd} % back in wallet
          </small>
        </h6>
        <EnrollButton
          enrolled={enrolled}
          enrollNow={this.enrollNow.bind(this)}
        />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loyalty: state.loyalty,
    auth: state.auth
  };
}

export default connect(mapStateToProps, { enroll, checkEnrollment })(Background);
