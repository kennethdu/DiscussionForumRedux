export default (state = {}, action ) => {
  switch (action.type) {
    case 'ADD_VOTE':
      return action.postId;
      console.log()
    default: 
      return state;
  }
}