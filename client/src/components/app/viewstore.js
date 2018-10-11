import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProducts } from '../../actions/app';
import Loading from './loading';
import EachProduct from './eachproduct';
import Background from './background';

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
      if (products.products.length > 0) {
        const storeName = products.products[0].store_name;
        const loyalty = products.products[0].loyalty;
        const loyaltyDisc = products.products[0].loyalty_disc;
        const lid = products.products[0].loyalty_id;
        return (
          <React.Fragment>
            <div className="column col-12">
              <Background
                name={storeName}
                lpg={loyalty}
                lpgd={loyaltyDisc}
                lid={lid}
              />
            </div>
            <EachProduct products={products} />
          </React.Fragment>
        );
      }
      return (
        <div className="column col-12">
            <div className="empty">
              <p className="empty-title h5">Store has No Items Yet</p>
              <p className="empty-subtitle">See other Stores.</p>
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
    products: state.products
  };
}

export default connect(mapStateToProps, { getProducts })(ViewStore);
