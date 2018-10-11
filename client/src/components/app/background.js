import React, { Component } from 'react';
import { connect } from 'react-redux';
import { enroll } from '../../actions/app';

class Background extends Component {
  enrollNow() {
    const username = localStorage.getItem('username');
    this.props.enroll(username, this.props.lid);
  }
  render() {
    console.log(this.props);
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
        <h1 className="text-center">
          <button className="btn btn-default" onClick={this.enrollNow.bind(this)}>
            Enroll Now
          </button>
        </h1>
      </React.Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    loyalty: state.loyalty
  };
}

export default connect(mapStateToProps, { enroll })(Background);
