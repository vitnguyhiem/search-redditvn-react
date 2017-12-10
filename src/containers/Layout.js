import React, { Component } from 'react';
import { connect } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'

class Layout extends Component {
  static propTypes = {
    is_loading: PropTypes.bool
  }

  static defaultProps = {
    is_loading: false
  }

  render() {
    return (
      <div className="react-layout">
        <Header />
          <div className="container" role="main">
            {this.props.children}
          </div>
        <Footer />
        {this.props.is_loading && <div className="loading">Loading&#8230;</div>}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  is_loading: state.main.is_loading
});

export default withRouter(connect(mapStateToProps)(Layout));
