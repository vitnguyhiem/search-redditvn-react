import React, { Component } from 'react';

class Error extends Component {
  render() {
    console.log(this.props.error);
    let errorMessage = "Something when wrong ...";
    if (this.props.error.response) {
      errorMessage = JSON.stringify(this.props.error.response.data, undefined, 2);
    } else {
      errorMessage = JSON.stringify(this.props.error, undefined, 2);
    }
    return (
      <div className="alert alert-danger" role="alert">
        <pre>
          {errorMessage}
        </pre>
      </div>
    )
  }
}

export default Error;
