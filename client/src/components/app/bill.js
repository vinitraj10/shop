import React, { Component } from 'react';

class Bill extends Component {
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
            <button onClick={this.checkout} className="btn btn-success">
              checkout
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Bill;
