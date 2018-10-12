import React, { Component } from 'react';

class EnrollButton extends Component {
  render() {
    const { enrolled } = this.props;
    if (enrolled === 1) {
      return (
        <h1 className="text-center">
          <button className="btn btn-success" disabled>
            Enrolled
          </button>
        </h1>
      );
    }
    return (
      <h1 className="text-center">
        <button className="btn btn-default" onClick={this.props.enrollNow}>
          Enroll Now
        </button>
      </h1>
    );
  }
}

export default EnrollButton;
