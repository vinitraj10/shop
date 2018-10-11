import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/app';
import Bill from './bill';

class CartProducts extends Component {
  renderEach(product) {
    const imgUrl = `http://localhost:8000${product.product_pic}`;
    return (
      <div className="column col-12" key={product.id}>
        <div className="tile">
          <div className="tile-icon">
            <figure className="avatar avatar-lg">
              <img src={imgUrl} alt="Avatar" />
            </figure>
          </div>
          <div className="tile-content">
            <h6 className="tile-title">
              {product.product_name}
              <p className="tile-subtitle text-gray"> ₹ {product.price}</p>
            </h6>
          </div>
          <div className="tile-action">
            <button
              className="btn btn-error"
              onClick={
                  () => this.props.removeFromCart(product.id,this.props.username)
                }
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { products } = this.props;
    return (
      <React.Fragment>
        <div className="column col-9">
          {products.map(this.renderEach.bind(this))}
        </div>
        <Bill products={products} />
      </React.Fragment>

    );
  }
}
export default connect(null, { removeFromCart })(CartProducts);
