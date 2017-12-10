import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { operations } from '../../duck';
import { connect } from 'react-redux';
import LazyImage from '../LazyImage';

class Top extends Component {
  componentDidMount() {
    this.props.fetchTop();
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card">
            <h5 className="card-header">
              <Link to="/stats/user">Top posters</Link>
            </h5>
            <ul className="list-group list-group-flush">
              {this.props.top.topUsers &&
                this.props.top.topUsers.map(value => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={value._id}>
                    <div>
                      <Link to={`/user/${value._id}`} className="d-inline-block mr-2">
                        <LazyImage
                          className="mr-2 rounded-circle fb-avatar"
                          src={`https://graph.facebook.com/${value._id}/picture?width=24`}
                          alt={value.name}
                          height="1.5rem"
                          width="1.5rem"
                        />
                      </Link>
                      <a href={`https://www.facebook.com/${value._id}`}>{value.name}</a>
                    </div>
                    <Link className="badge badge-primary badge-pill" to={`/user/${value._id}`}>
                      {value.post_count}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card">
            <h5 className="card-header">Most liked posts</h5>
            <ul className="list-group list-group-flush">
              {this.props.top.topLikes &&
                this.props.top.topLikes.map(value => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={value._id}>
                    <div>
                      <Link to={`/user/${value.from.id}`} className="d-inline-block mr-2">
                        <LazyImage
                          className="rounded-circle fb-avatar"
                          src={`https://graph.facebook.com/${value.from.id}/picture?width=24`}
                          alt={value.from.name}
                          height="1.5rem"
                          width="1.5rem"
                        />
                      </Link>
                      <a href={`https://www.facebook.com/${value._id}`}>{value.from.name}</a>
                    </div>
                    <Link className="badge badge-primary badge-pill" to={`/post/${value._id}`}>
                      {value.likes_count}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 mb-3">
          <div className="card">
            <h5 className="card-header">Most commented posts</h5>
            <ul className="list-group list-group-flush">
              {this.props.top.topComments &&
                this.props.top.topComments.map(value => (
                  <li className="list-group-item d-flex justify-content-between align-items-center" key={value._id}>
                    <div>
                      <Link to={`/user/${value.from.id}`} className="d-inline-block mr-2">
                        <LazyImage
                          className="mr-2 rounded-circle fb-avatar"
                          src={`https://graph.facebook.com/${value.from.id}/picture?width=24`}
                          alt={value.from.name}
                          height="1.5rem"
                          width="1.5rem"
                        />
                      </Link>
                      <a href={`https://www.facebook.com/${value._id}`}>{value.from.name}</a>
                    </div>
                    <Link className="badge badge-primary badge-pill" to={`/post/${value._id}`}>
                      {value.comments_count}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    top: state.stats.top
  };
};

export default connect(mapStateToProps, {
  fetchTop: operations.fetchTop
})(Top);
