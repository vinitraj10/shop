import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { buyNow } from '../../actions/app';

class Bill extends Component {
  buy() {
    this.props.buyNow(this.props.products, () => {
      this.props.history.push('/myorders');
    });
  }
  render() {
    let price = 0;
    let i = 0;
    let cashback = 0;
    const products = this.props.products;
    for (i = 0; i < products.length; i++) {
      price += products[i].price;
    }
    cashback = (price * 10) / 100;
    return (
      <div className="column col-3 tile-content">
        <div className="panel">
          <div className="panel-header">
            <div className="panel-title">
              <h5>Price Details</h5>
            </div>
          </div>
          <div className="panel-body">
              <h6>
                Price ({products.length}) Item
                <div className="float-right"> ₹ {price}</div>
              </h6>
              <h6 className="text-gray">
                Cashback
                  <div className="float-right">
                    ₹ {cashback}
                  </div>
              </h6>
          </div>
          <div className="divider" />
          <div className="panel-footer">
            <h1 className="text-center">
              <button onClick={this.buy.bind(this)} className="btn btn-success">
                Buy Now
              </button>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

Bill = withRouter(Bill);

export default connect(null, { buyNow })(Bill);
