import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getStores } from '../../actions/app';
import Loading from './loading';
import EachStore from './eachstore';

class Store extends Component {
  componentDidMount() {
    this.props.getStores();
  }
  render() {
    const { fetched } = this.props.stores;
    const { fetching } = this.props.stores;
    const { stores } = this.props.stores
    return (
      <React.Fragment>
      { fetching ? (<Loading />) : (fetched ? (<EachStore stores={stores} />) : (''))}
      </React.Fragment>
    );
  }
}


function mapStateToProps(state) {
  return {
    stores: state.stores
  };
}
export default connect(mapStateToProps, { getStores })(Store);
