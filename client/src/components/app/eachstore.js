import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './css/app.css';

class EachStore extends Component {

  renderEach(store) {
    const imgUrl = `http://localhost:8000/media/${store.picture}`;

    return (
      <div className="column col-4 pad-top" key={store.id}>
        <div className="card" >
          <div className="card-image">
            <img alt="img" src={imgUrl} className="img-responsive" />
          </div>
          <div className="card-header">
            <div className="card-title h5">{store.name}</div>
          </div>

          <div className="card-footer">
            <Link to={`/store/${store.id}`} className="btn btn-primary">
              View Shop
            </Link>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { data } = this.props.stores.data;
    return (
      <React.Fragment>
        {data.map(this.renderEach.bind(this))}
      </React.Fragment>
    );
  }
}

export default EachStore;
