import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const {title, description , date ,id} = action;
  switch (action.type) {
    case c.ADD_MEMORY:
      return Object.assign({}, state, {
        [id]: {
          title: title,
          description: description,
          date:  date,
          id: id
        }
      });
    case c.DELETE_MEMORY:
      let newState = { ...state };
      delete newState[id];
      return newState;
    default:
      return state;
  }
};