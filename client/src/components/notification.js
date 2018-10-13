import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification extends Component {
      componentDidUpdate() {
        this.notify();
      }
      notify() {
        const { data } = this.props.notification;
        const { mode } = this.props.notification;
        if (mode === 'error') {
          toast.error(data, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        } else {
          toast.success(data, {
            position: toast.POSITION.BOTTOM_CENTER
          });
        }
      }
      render() {
        return (
          <div>
            <ToastContainer />
          </div>
        );
      }
}

function mapStateToProps(state) {
  return {
    notification: state.notification
  };
}
export default connect(mapStateToProps)(Notification);
