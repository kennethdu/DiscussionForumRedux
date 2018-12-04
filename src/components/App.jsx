import React from 'react';
import Post from '../models/Post';
import Index from './Index';
import CreatePost from './CreatePost';
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css';

var moment = require('moment');

class App extends React.Component{

  constructor(){
    super();
    this.state = {
      posts: [new Post('Title1', 'Content1', 'David', moment()), new Post('Title2', 'Content2', 'Hyewon', moment())]
    };
    this.sortPosts = this.sortPosts.bind(this);
    this.addPost = this.addPost.bind(this);
  }

  sortPosts() {
    this.postsCopy = this.state.posts.slice();
    this.postsCopy.sort((postA, postB) => postB.upVote - postA.upVote);
    this.setState({posts: this.postsCopy});
  }

  addPost(title, content, user) {
    const timestamp = moment();
    let posts = this.state.posts.slice();
    posts.push(new Post(title, content, user, timestamp));
    this.setState({posts: posts});
  }

  render(){
    return (
      <div>
        <CreatePost newPost={this.addPost} />
        <Index posts={this.state.posts} sortPosts={this.sortPosts} />
      </div>
    );
  }
}

export default App;
