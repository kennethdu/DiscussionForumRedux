import React from 'react';
import PropTypes from 'prop-types';
import $ from '../../node_modules/jquery/dist/jquery';
import { connect } from 'react-redux';
import { v4 } from 'uuid';
import Moment from 'moment';

function CreatePost(props) {
  let _title = null;
  let _content = null;
  let _user = null;
  let onSubmitHandler = event => {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: 'ADD_POST',
      id: v4(),
      title: _title.value,
      content: _content.value,
      user: _user.value,
      timestamp:  new Moment(),
      upVote: 0,
    };
    dispatch(action);
    _title.value = '';
    _content.value = '';
    _user.value = '';
  };
  return (
    <div>
      <style jsx>{`
      #userForm {
        width: 50%;
        margin-left: 35px;
      }
            `}
      </style>
      <form onSubmit={onSubmitHandler} id='userForm'>
        <input id='title' className='form-control' type='text' placeholder='title' ref={(input) => { _title = input; }}></input>
        <input id='content' className='form-control' type='text' placeholder='content' ref={(input) => { _content = input; }}></input>
        <input id='user' className='form-control' type='text' placeholder='user' ref={(input) => {_user = input;}}></input>
        <button type='submit' className='btn btn-light'>Post</button>
      </form>
    </div>
  );

}

// CreatePost.propTypes = {
//   newPost: PropTypes.func,
// };

export default connect()(CreatePost);