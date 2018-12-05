import PostClass from '../models/Post';
import Moment from 'moment';

const defaultPosts = [new PostClass('Title1', 'Content1', 'David', new Moment()), new PostClass('Title2', 'Content2', 'Hyewon', new Moment())];

let defaultPostsState = {};
for (let index in defaultPosts) {
  let defaultPost = defaultPosts[index];
  Object.assign(defaultPostsState, {
    [defaultPost.id]: {
      id: defaultPost.id,
      title: defaultPost.title,
      content: defaultPost.content,
      user: defaultPost.user,
      timestamp: defaultPost.timestamp,
      upVote: defaultPost.upVote,
    }
  });
}

export default (state = defaultPostsState, action) => {
  switch (action.type) {
  case 'ADD_POST':
    const { title, content, user, id, timestamp, upVote } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        id: id,
        title: title, 
        content: content,
        user: user,
        timestamp: timestamp,
        upVote: upVote,
      }
    });
    return newState;
  case 'ADD_VOTE':
    const add_vote_id = action.id;
    newState = Object.assign({}, state);
    newState[add_vote_id].upVote = state[add_vote_id].upVote+1;
    console.log(newState);
    return newState;
  default:
    return state;
  }
};

