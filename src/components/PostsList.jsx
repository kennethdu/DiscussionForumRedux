import React from 'react';
import PropTypes from 'prop-types';
import PostClass from '../models/Post';
import Post from './Post';
import { v4 } from 'uuid';

class PostsList extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    // this.sortPosts = props.sortPosts;
  }

  render() {
    this.posts = Object.keys(this.props.posts.postList).map(postKey => {
      let post= this.props.posts.postList[postKey];
      return (
        <Post post={post} key={postKey}/>
      );
    });
    // this.posts = this.props.posts.postList.map((post) => 
    //   <Post post={post} key={v4()} sortPosts={this.sortPosts} />);
    return (
      <div>
        {this.posts}
      </div>
    );
  }
}

PostsList.propTypes = {
  posts: PropTypes.object,
  // sortPosts: PropTypes.func,
};

export default PostsList;