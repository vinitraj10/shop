import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeFromCart } from '../../actions/app';
import Bill from './bill';

class CartProducts extends Component {
  renderEach(product) {
    console.log(product)
    const imgUrl = `http://localhost:8000${product.product_pic}`;
    return (
      <div className="column col-12 tile-padding" key={product.id}>
        <div className="tile tile-new">
          <div className="tile-icon">
            <figure className="avatar avatar-lg">
              <Link to={`/product/${product.id}`}>
                <img src={imgUrl} alt="Avatar" />
              </Link>
            </figure>
          </div>
          <div className="tile-content">
            <h6 className="tile-title">
              {product.product_name}
              <p className="tile-subtitle text-gray"> ₹ {product.price}</p>
            </h6>
            <p>
              <button
                className="btn btn-sm btn-link"
                onClick={
                    () => this.props.removeFromCart(product.id, this.props.username)
                  }
              >
                Remove
              </button>
              <Link
                className="btn btn-sm space"
                to={`/product/${product.product_id}`}
              >
                View Reviews
              </Link>
            </p>
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
