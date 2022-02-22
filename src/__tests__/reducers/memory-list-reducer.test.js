import memoryListReducer from '../../reducers/memory-list-reducer';

describe('memoryListReducer', () => {
  const currentState = {
    1: {title: "Dancing at band camp",
    date: "January the fourtybillionth",
    description: "this cool thing that happened this one time with these one people at band camp",
    id: 1
    },
    2: {title: "Drinking at band camp",
    date: "January the negative 7nth",
    description: "this cool thing that happened this one time with these one people at band camp",
    id: 2 }
  }

  let action;
  const memoryData = {
    title: "Dancing at band camp",
    date: "January the fourtybillionth",
    description: "this cool thing that happened this one time with these one people at band camp",
    id: 1
  };
  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(memoryListReducer({}, { type: null})).toEqual({});
  });

  test('Should successfully add new memory data to mainMemoryList', () => {
    const { title, date, description, id } = memoryData;
    action = {
      type: 'ADD_MEMORY',
      title: title,
      date: date,
      description: description,
      id: id
    };
    expect(memoryListReducer({}, action)).toEqual({
      [id] : {
        title: title,
        date: date,
        description: description,
        id: id
      }
    });
  });

  test('Should successfully delete a memory', () => {
    action = {
      type: 'DELETE_MEMORY',
      id: 1
    };
    expect(memoryListReducer(currentState, action)).toEqual({
      2: {title: "Drinking at band camp",
    date: "January the negative 7nth",
    description: "this cool thing that happened this one time with these one people at band camp",
    id: 2 }      
    });
  });

});