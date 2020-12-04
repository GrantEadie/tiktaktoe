import xIsNextReducer from '../../reducers/x-is-next-reducer.js';




describe("xIsNextReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(xIsNextReducer(true, { type: null })).toEqual(true);
  });

  test('Should toggle form visibility state to false', () => {
    expect(xIsNextReducer(true, { type: 'CHECK_TURN' })).toEqual(false);
  });
});