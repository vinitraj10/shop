import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadReview } from '../../actions/app';

class ViewProduct extends Component {
  componentDidMount() {
    this.props.loadReview(this.props.match.params.id);
  }

  renderEach(review) {
    let imgUrl = '';
    if (review.profile_pic !== '') {
      imgUrl = `http://localhost:8000${review.profile_pic}`;
    } else {
      imgUrl = 'http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/profile-icon.png';
    }
    return (
      <div className="column col-12" key={review.id}>
        <div className="tile">
          <div className="tile-icon">
            <figure className="avatar avatar-lg">
              <img src={imgUrl} alt="Avatar" />
            </figure>
          </div>
          <div className="tile-content">
            <h6 className="tile-title">
              {review.username}
              <p className="tile-subtitle text-gray">{review.comment}</p>
            </h6>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { data } = this.props.review;
    if (data) {
      if (data.data.length > 0) {
        const newData = data.data;
        console.log(newData);
        return (
            <React.Fragment>
              <div className="centered">
                <h1 className="text-center">Reviews</h1>
              </div>
              {newData.map(this.renderEach.bind(this))}
            </React.Fragment>
          );
        }
      }
    return (
      <div className="centered">
        <h1 className="text-center">No Reviews Yet</h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    review: state.review
  };
}

export default connect(mapStateToProps, { loadReview })(ViewProduct);
