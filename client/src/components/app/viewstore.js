import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProducts } from '../../actions/app';
import Loading from './loading';
import EachProduct from './eachproduct';

class ViewStore extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getProducts(id);
  }
  render() {
    const { fetched } = this.props.products;
    const { fetching } = this.props.products;
    const { products } = this.props.products;
    if (fetching) {
      return (
        <Loading />
      );
    } else if (fetched) {
      return (
        <EachProduct products={products} />
      );
    }
    return (
      <div />
    );
  }
}
function mapStateToProps(state) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps, { getProducts })(ViewStore);
