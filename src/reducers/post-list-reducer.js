export default (state = {}, action) => {
  switch (action.type) {
    case 'ADD_POST':
      const { title, content, user } = action;
      let newState = Object.assign({}, state, {
        [id]: {
         title: title, 
         content: content,
         user: user
        }
      });
      return newState;
    default:
      return state;
  }
};