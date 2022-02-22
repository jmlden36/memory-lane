export default (state = {}, action) => {
  const {title, description , date ,id} = action;
  switch (action.type) {
    case 'ADD_MEMORY':
      return Object.assign({}, state, {
        [id]: {
          title: title,
          description: description,
          date:  date,
          id: id
        }
      });
    default:
      return state;
  }
};