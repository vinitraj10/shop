import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../actions/app';
import './css/app.css';

class EachProduct extends Component {
  HandleaddToCart(productId) {
    const username = localStorage.getItem('username');
    this.props.addToCart(username, productId);
  }
  renderEach(product) {
    const imgUrl = `http://localhost:8000/media/${product.product_pic}`;

    return (
      <div className="column col-3 pad-top" key={product.id}>
        <div className="card" >
          <div className="card-image">
            <img alt="img" src={imgUrl} className="img-card" />
          </div>
          <div className="card-header">
            <div className="card-title h5 text-center">{product.product_name}</div>
            <div className="card-subtitle text-gray text-center">₹ {product.price}</div>
          </div>

          <div className="card-footer">
            <div className="options">
              <button
                className="btn btn-sm"
                onClick={this.HandleaddToCart.bind(this, product.id)}
              >
                Add to Cart
              </button>
            </div>
            <div className="options">
              <Link to={`/product/${product.id}`} className="btn btn-sm">
                View Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { products } = this.props.products;
    return (
      <React.Fragment>
        {products.map(this.renderEach.bind(this))}
      </React.Fragment>
    );
  }
}

export default connect(null, { addToCart })(EachProduct);
