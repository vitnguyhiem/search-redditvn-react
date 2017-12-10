import React, { PureComponent } from 'react';
import LazyImage from '../LazyImage';

class PostImage extends PureComponent {
  render() {
    if (!this.props.images) {
      return null;
    }
    if (this.props.images.length === 0) {
      return null;
    }

    return (
      <div className="card-body blog-post-image text-center">
        {this.props.images.map((item, index) => (
          <div className="mb-2" key={index}>
            <a href={item.url}>
              <LazyImage className="rounded" src={item.src} />
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default PostImage;
