import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCart } from '../../actions/app';
import CartProducts from './cartproducts';

class Cart extends Component {
  componentDidMount() {
    this.props.loadCart(this.props.auth.username);
  }
  render() {
    const { products } = this.props.cart;
    const { username } = this.props.auth;
    let count;
    if (products) {
      count = products.inCart.length;
      if (count > 0) {
        return (
          <CartProducts products={products.inCart} username={username} />
        );
      }
      return (
      <div className="column col-12">
          <div className="empty">
            <p className="empty-title h5">You have no items in cart</p>
            <p className="empty-subtitle">See Store page for something.</p>
            <div className="empty-action">
              <Link to="/" className="btn btn-primary">Go to stores</Link>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div />
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    auth: state.auth
  };
}

export default connect(mapStateToProps, { loadCart })(Cart);
