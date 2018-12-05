import addVoteReducer from './add-vote-reducer';
import postListReducer from './post-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  addVote: addVoteReducer,
  postList: postListReducer
});

export default rootReducer;