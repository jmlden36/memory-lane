import * as c from './ActionTypes';

export const deleteMemory = id => ({
  type: c.DELETE_MEMORY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addMemory = (memory) => {
  const { title, date, description, id } = memory; 
  return {
    type: c.ADD_MEMORY,
    title: title,
    date: date,
    description: description,
    id: id
  }
}