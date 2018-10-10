import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../utils/redux-form-fields';
import './css/auth.css';

class Signup extends Component {
  formSubmit(formValue) {
    console.log(formValue);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="columns content">
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
              name="Email"
              label="Email"
            />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

Signup = withRouter(Signup);
Signup = reduxForm({
	form: 'SignupForm',
	fields: ['username', 'password', 'email']
})(Signup);

export default connect(null)(Signup);
