import React, { Component } from 'react';
import deepEqual from 'deep-equal';
import $ from 'jquery';
import { connect } from 'react-redux';
import Mark from 'mark.js'

class PostContent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (deepEqual(this.props, nextProps) === false) {
      return true;
    }
    return false;
  }

  componentDidUpdate(prevProps, prevState) {
    this.updateContent();
  }

  componentDidMount() {
    this.updateContent();
  }

  updateContent = () => {
    const postContainer = $(this.refs.blogPostContainer);
    postContainer.empty();
    let content = this.props.content || '';
    content = content.replace(/(?:\r\n|\r|\n)/g, '<br />');
    const result = content.replace(/([ru]\/[a-z0-9\-_]+)/gi, function(match, p1, offset, string) {
      const className = p1[0].toLowerCase() === 'r' ? 'redditvn-sub' : 'redditvn-user';
      return '<a class="' + className + '" href="https://reddit.com/' + p1 + '" target="_blank">' + p1 + '</a>';
    });

    const newnode = $('<div>', {
      html: result
    });

    postContainer.append(newnode);
    if (this.props.query) {
      if (this.props.query.startsWith('regex:')) {
        const regexString = this.props.query.substr(6);
        const reg = new RegExp(regexString, 'gim')
        new Mark(this.refs.blogPostContainer).markRegExp(reg);
      }
      else {
        new Mark(this.refs.blogPostContainer).mark(this.props.query, {"separateWordSearch": false});
      }
    }
  }

  render() {
    return <section className="card-body blog-post-content" ref="blogPostContainer" />;
  }
}

const mapStateToProps = (state, ownProps) => ({
  query: state.search.query
});

export default connect(mapStateToProps)(PostContent);
