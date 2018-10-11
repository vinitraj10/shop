import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadCart } from '../../actions/app';

class CartLink extends Component {
  componentDidMount() {
    const { username } = this.props.auth;
    this.props.loadCart(username);
  }
  render() {
    const { products } = this.props.cart;
    let count;
    if (products) {
      count = products.inCart.length;
    } else {
        count = 0;
    }

    return (
      <span className="badge" data-badge={count}>
        <Link to="/cart" className="btn btn-link link">
          Cart
        </Link>
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    auth: state.auth
  };
}

export default connect(mapStateToProps, { loadCart })(CartLink);
