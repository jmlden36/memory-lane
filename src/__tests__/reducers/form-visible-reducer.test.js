import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../../actions/ActionTypes';

describe("formVisibleReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer(false, { type: null } )).toEqual(false);
  });

  test('Should toggle between memory list and reuseable form', () => {
    expect(formVisibleReducer(undefined, { type: c.TOGGLE_FORM})).toEqual(true);
  });

});