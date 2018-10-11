import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../utils/redux-form-fields';
import { signup } from '../../actions/auth';

import './css/auth.css';

class Signup extends Component {
  formSubmit(formValue) {
    this.props.signup(formValue, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="column col-4" />
        <div className="column col-4">
          <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
            <Field component={renderInput} type="text" name="username" label="Username" />
            <Field
              component={renderInput}
              type="password"
              name="password"
              label="Password"
            />
            <Field
              component={renderInput}
              type="text"
              name="email"
              label="Email"
            />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

Signup = withRouter(Signup);
Signup = reduxForm({
	form: 'SignupForm',
	fields: ['username', 'password', 'email']
})(Signup);

export default connect(null, { signup })(Signup);
