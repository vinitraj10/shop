import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addReview } from '../../actions/app';

class Review extends Component {
  formSubmit(formValue) {
    this.props.addReview(formValue, this.props.match.params.id, () => {
      this.props.history.push('/');
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <React.Fragment>
        <div className="column col-3" />
        <div className="column col-6">
            <form onSubmit={handleSubmit(this.formSubmit.bind(this))}>
              <div className="form-group">
                  <label className="form-label" htmlFor="Message">Message</label>
                  <Field
                    component="textarea"
                    name="content"
                    className="form-input"
                    placeholder="Enter Review"
                    rows="3"
                  />
              </div>
              <div className="form-group">
                <button className="btn btn-primary" type="submit" id="vini">Post</button>
                <Link to="/" className="btn btn-default"> Cancel</Link>
              </div>
            </form>
          </div>
      </React.Fragment>
    );
  }
}

Review = withRouter(Review);
Review = reduxForm({
	form: 'ReviewForm',
	fields: ['data']
})(Review);


export default connect(null, { addReview })(Review);
