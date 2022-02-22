import rootReducer from '../../reducers/index';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import memoryListReducer from '../../reducers/memory-list-reducer';
import { createStore } from 'redux';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      mainMemoryList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of the memoryListReducer matches root reducer', () => {
    expect(store.getState().mainMemoryList).toEqual(memoryListReducer(undefined, { type: null }));
  });

  test('Check that initial state formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type: null }));
  });

  test('Check that initial state of memoryListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_MEMORY,
      title: 'Rainbows and sunshine.',
      description: "A cool dream.",
      date: "Feb 22",
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().mainMemoryList).toEqual(memoryListReducer(undefined, action));
  });
})

