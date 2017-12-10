import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class PostNavigation extends PureComponent {
  render() {
    return (
      <aside className="card-body">
        <div className="row">
          {this.props.prevPost && (
            <div className="col">
              <Link className="badge badge-pill badge-secondary mr-1" to={`/post/${this.props.prevPost._id}`}>
                « Prev post
              </Link>
            </div>
          )}
          {this.props.nextPost && (
            <div className="col text-right">
              <Link className="badge badge-pill badge-secondary mr-1" to={`/post/${this.props.nextPost._id}`}>
                Next post »
              </Link>
            </div>
          )}
        </div>
      </aside>
    );
  }
}

export default PostNavigation;
