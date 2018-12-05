export default (state = {}, action ) => {
  let newState;
  console.log()
  switch (action.type) {
  case 'UP_VOTE':
    const { id_add_vote } = action;
    console.log(id_add_vote);
    newState = Object.assign({}, state);
    console.log(state);
    newState[id_add_vote].upVote++;
    return newState;
  case 'DOWN_VOTE':
    const { id_down_vote } = action;
    newState = Object.assign({}, state);
    newState[id_down_vote].upVote--;
    return newState;
  default: 
    return state;
  }
};