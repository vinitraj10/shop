import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadMyTransactions } from '../../actions/app';

class Mytransactions extends Component {
  componentDidMount() {
    this.props.loadMyTransactions(this.props.auth.username);
  }
  renderEach(each) {
    const imgUrl = `http://localhost:8000${each.pic}`;
    console.log(each);
    return (
      <div className="column col-12" key={each.id}>
        <div className="tile">
          <div className="tile-icon">
            <figure className="avatar avatar-lg">
              <img src={imgUrl} alt="Avatar" />
            </figure>
          </div>
          <div className="tile-content">
            <h6 className="tile-title">
              {each.name}
              <p className="tile-subtitle text-gray"> ₹ {each.price}</p>
            </h6>
          </div>
          <div className="tile-action">
            <Link to={`/add/review/${each.product_id}`} className="btn btn-success">
              Add Review
            </Link>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { transactions } = this.props.transactions;
    if (transactions) {
      if(transactions.data.length>0){
          return (
            <React.Fragment>
              {transactions.data.map(this.renderEach.bind(this))}
            </React.Fragment>
          );
        }
        return (
          <div className="column col-12">
              <div className="empty">
                <p className="empty-title h5">You have no transactions yet</p>
                <p className="empty-subtitle">See Store page for something.</p>
                <div className="empty-action">
                  <Link to="/" className="btn btn-primary">Go to stores</Link>
                </div>
              </div>
          </div>
        );
      }
      return (
        <React.Fragment />
      );
  }
}

function mapStateToProps(state) {
  return {
    transactions: state.transactions,
    auth: state.auth
  };
}

export default connect(mapStateToProps, { loadMyTransactions })(Mytransactions);
