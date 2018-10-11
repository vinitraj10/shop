import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../utils/redux-form-fields';
import { signin } from '../../actions/auth';
import './css/auth.css';

class Signin extends Component {
  formSubmit(formValue) {
    this.props.signin(formValue, () => {
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
            <Field component={renderInput} type="password" name="password" label="Paassword" />
            <div className="form-group">
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}
Signin = withRouter(Signin);
Signin = reduxForm({
	form: 'SigninForm',
	fields: ['username', 'password']
})(Signin);

export default connect(null,{signin})(Signin);
