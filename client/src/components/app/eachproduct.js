import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/app.css';

class EachProduct extends Component {

  renderEach(product) {
    const imgUrl = `http://localhost:8000/media/${product.product_pic}`;

    return (
      <div className="column col-4 pad-top" key={product.id}>
        <div className="card" >
          <div className="card-image">
            <img alt="img" src={imgUrl} className="img-card" />
          </div>
          <div className="card-header">
            <div className="card-title h5">{product.product_name}</div>
            <div className="card-subtitle text-gray">₹ {product.price}</div>
          </div>

          <div className="card-footer">
            <button className="btn btn-primary">
              Buy Now
            </button>
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

export default EachProduct;
