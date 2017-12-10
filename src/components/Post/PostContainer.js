import React, { PureComponent } from 'react';
import { splitWord } from '../../utils/utils';
import PostAuthor from './PostAuthor';
import PostTitle from './PostTitle';
import PostContent from './PostContent';
import PostImage from './PostImage';
import PostInfo from './PostInfo';
import PostNavigation from './PostNavigation';
import PostComment from './PostComment';
import classNames from 'classnames';

class PostContainer extends PureComponent {
  render() {
    if (this.props.post._id === undefined) {
      return null;
    }

    const articleClassName = classNames('card blog-post mb-3', { 'border-danger': this.props.post.is_deleted === true })
    const showDetail = this.props.showDetail === true;

    return (
      <article className={articleClassName}>
        <PostAuthor user={this.props.post.from} createdTime={this.props.post.created_time} />
        {!showDetail && <PostTitle postId={this.props.post._id} title={splitWord(this.props.post.message, 50)} />}
        {showDetail && <PostNavigation prevPost={this.props.post.prev_post} nextPost={this.props.post.next_post} />}
        <PostContent content={this.props.post.message} />
        {showDetail && <PostImage images={this.props.images} />}
        <PostInfo postId={this.props.post._id} likesCount={this.props.post.likes_count} isDeleted={this.props.post.is_deleted} commentsCount={this.props.post.comments_count} showDetail={showDetail} />
        {showDetail && <PostComment postId={this.props.post._id} comments={this.props.comments} />}
        {showDetail && <PostNavigation prevPost={this.props.post.prev_post} nextPost={this.props.post.next_post} />}
      </article>
    );
  }
}

export default PostContainer;
