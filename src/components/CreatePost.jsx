import React from 'react';
import PropTypes from 'prop-types';
import $ from '../../node_modules/jquery/dist/jquery';

function CreatePost(props) {
  let onSubmitHandler = event => {
    event.preventDefault();
    props.newPost($('#title').val(), $('#content').val(), $('#user').val());
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
        <input id='title' className='form-control' type='text' placeholder='title'></input>
        <input id='content' className='form-control' type='text' placeholder='content'></input>
        <input id='user' className='form-control' type='text' placeholder='user'></input>
        <button type='submit' className='btn btn-light'>Post</button>
      </form>

    </div>
  );

}

CreatePost.propTypes = {
  newPost: PropTypes.func,
};

export default CreatePost;