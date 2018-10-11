import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { buyNow } from '../../actions/app';

class Bill extends Component {
  buy() {
    this.props.buyNow(this.props.products, () => {
      this.props.history.push('/mytransactions');
    });
  }
  render() {
    let price = 0;
    let i = 0;
    const products = this.props.products;
    for (i = 0; i < products.length; i++) {
      price += products[i].price;
    }
    return (
      <div className="column col-3">
        <div className="panel">
          <div className="panel-body">
            <h2 className="text-center text-gray"> ₹ {price}</h2>
          </div>
          <div className="panel-footer">
            <button onClick={this.buy.bind(this)} className="btn btn-success">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Bill = withRouter(Bill);

export default connect(null, { buyNow })(Bill);
