import React from 'react';
import PropTypes from 'prop-types';
import PostClass from '../models/Post';
import { connect } from 'react-redux';

var moment = require('moment');

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      post: props.post,
    };
    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
    this.title = this.state.post.title;
    this.content = this.state.post.content;
    this.user = this.state.post.user;
    this.timestamp = this.state.post.timestamp.fromNow();

  }

  handleUpVote() {
    const { dispatch } = this.props;
    const action = {
        type: 'ADD_VOTE',
        id: this.props.post.id,
      };
    dispatch(action);
    // let post = this.state.post;
    // post.upVote++;
    // this.setState({post: post});
    // this.props.sortPosts();
  }   

  handleDownVote() {
    let post = this.state.post;
    post.upVote--;
    this.setState({post: post});
    this.props.sortPosts();
  }

  render() {
    console.log(this.props);
    return (
      <div className='d-flex flex-row'>
        <style jsx>{`
          svg {
            width: 15px;
          }
          button {
            padding: 2px 10px 2px 10px;
            margin-top: 5px;
            margin-right: -1px;
            background-color: transparent;
            border: none;
          }
       
          #userPost {
            width: 47.5%;
           padding: 5px;
           margin-top: 5px;
          }

          #userInfo{ 
            font-size: 13px;
            color: gray;
          }
          #leftColumn{
            margin-left: 35px;
            background-color: #f8f9fa;
            border: 1px solid #f8f9fa;
            border-radius: 4px;
            margin-top: 5px;
          }
        `}
        </style>
        <div id='leftColumn' className='d-flex flex-column align-items-center justify-content-between'>
          <button className='' onClick={this.handleUpVote}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
              fill="#797979" stroke="none">
              <path d="M102 247 c-23 -23 -42 -46 -42 -50 0 -4 11 -7 25 -7 24 0 24 -2 27
-82 l3 -83 33 -3 32 -3 0 85 c0 85 0 86 25 86 36 0 31 22 -15 64 -22 20 -41
36 -43 36 -2 0 -22 -19 -45 -43z"/>
            </g>
          </svg>
          </button>
          <span>{this.props.post.upVote}</span>
          <button className='' onClick={this.handleDownVote}><svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            width="30.000000pt" height="30.000000pt" viewBox="0 0 30.000000 30.000000"
            preserveAspectRatio="xMidYMid meet">
            <metadata>
Created by potrace 1.15, written by Peter Selinger 2001-2017
            </metadata>
            <g transform="translate(0.000000,30.000000) scale(0.100000,-0.100000)"
              fill="#797979" stroke="none">
              <path d="M122 278 c-7 -7 -12 -42 -12 -85 0 -66 -2 -73 -19 -73 -11 0 -23 -5
-27 -11 -7 -12 63 -89 81 -89 15 0 85 73 85 88 0 7 -11 12 -25 12 -25 0 -25 1
-25 79 0 63 -3 80 -16 85 -22 8 -28 8 -42 -6z"/>
            </g>
          </svg></button>
        </div>
        <div className='card' id='userPost'>
          <span id='userInfo'>{this.user} - {this.timestamp}</span>
          <h5>{this.title}</h5>
          <p>{this.content}</p>
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  sortPosts: PropTypes.func,
  post: PropTypes.object,
};

export default connect()(Post);