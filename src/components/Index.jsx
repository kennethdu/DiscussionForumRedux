import React from 'react';
import PropTypes from 'prop-types';
import PostClass from '../models/Post';
import Post from './Post';
import { v4 } from 'uuid';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.sortPosts = props.sortPosts;
  }

  render() {
    this.posts = this.props.posts.map((post) => 
      <Post post={post} key={v4()} sortPosts={this.sortPosts} />);
    return (
      <div>
        <style jsx>{`
        `}</style>
        {this.posts}
      </div>
    );
  }
}

Index.propTypes = {
  posts: PropTypes.arrayOf(PostClass),
  sortPosts: PropTypes.func,
};

export default Index;