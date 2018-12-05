import React from 'react';
import Post from '../models/Post';
import PostsList from './PostsList';
import CreatePost from './CreatePost';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

var moment = require('moment');

class App extends React.Component{

  constructor(){
    super();
    // this.sortPosts = this.sortPosts.bind(this);
    // this.addPost = this.addPost.bind(this);
  }

  // sortPosts() {
  //   this.postsCopy = this.state.posts.slice();
  //   this.postsCopy.sort((postA, postB) => postB.upVote - postA.upVote);
  //   this.setState({posts: this.postsCopy});
  // }

  // addPost(title, content, user) {
  //   const timestamp = moment();
  //   let posts = this.state.posts.slice();
  //   posts.push(new Post(title, content, user, timestamp));
  //   this.setState({posts: posts});
  // }

  render(){
    return (
      <div>
        <CreatePost />
        <PostsList posts={this.props.masterPostList} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    masterPostList: state
  }
};

App.propTypes = {
  masterPostList : PropTypes.object
}

export default connect(mapStateToProps)(App);
