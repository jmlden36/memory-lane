import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('memory lane actions', () => {
  it('addMemory should create ADD_MEMORY action', () => {
    expect(actions.addMemory({
      type: c.ADD_MEMORY,
      title: "Dancing at band camp",
      date: "January the fourtybillionth",
      description: "this cool thing that happened this one time with these one people at band camp",
      id: 1
    })).toEqual({
      type: c.ADD_MEMORY,
      title: "Dancing at band camp",
      date: "January the fourtybillionth",
      description: "this cool thing that happened this one time with these one people at band camp",
      id: 1
    });
  });

  it('deleteMemory should create DELETE_Memory action', () => {
    expect(actions.deleteMemory(1)).toEqual({
      type: c.DELETE_MEMORY,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });
});