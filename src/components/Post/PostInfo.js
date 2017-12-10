import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class PostInfo extends PureComponent {
  render() {
    return (
      <div className="card-body">
        {this.props.likesCount > 0 && <span className="badge badge-pill badge-primary mr-1">{this.props.likesCount} likes</span>}
        {this.props.commentsCount > 0 && this.props.showDetail ? (
          <a className="badge badge-pill badge-secondary mr-1" href={`#comment`}>
            {this.props.commentsCount} comments
          </a>
        ) : (
          <Link className="badge badge-pill badge-secondary mr-1" to={`/post/${this.props.postId}#comment`}>
            {this.props.commentsCount} comments
          </Link>
        )}
        {this.props.isDeleted ? (
          <span className="badge badge-pill badge-danger mr-1">Deleted</span>
        ) : (
          <a className="badge badge-pill badge-info mr-1" href={`https://www.facebook.com/${this.props.postId}`}>
            Read on Facebook
          </a>
        )}
      </div>
    );
  }
}

export default PostInfo;
