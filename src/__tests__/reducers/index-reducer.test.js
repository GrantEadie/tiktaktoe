import rootReducer from '../../reducers/index';
import gameHistoryReducer from '../../reducers/game-history-reducer'
import stepNumberReducer from '../../reducers/step-number-reducer'
import xIsNextReducer from '../../reducers/x-is-next-reducer';
import { createStore } from 'redux';

let store = createStore(rootReducer);

const history = [
  {squares: [null, null, null, null, null, null, null, null, null]},
  {squares: ['X', null, null, null, null, null, null, null, null]}
];

const historySlice = history.slice(0, 2 + 1);

describe ("rootReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      history: [{squares: Array(9).fill(null)}],
      xIsNext: true,
      stepNumber: 0,
    });
  });

  test('Check that ADD_HISTORY action works for gameHistoryReducer and root reducer', () => {
    const action = {
      type: 'ADD_HISTORY',
      history: [{squares: Array(9).fill(null)}]
    }
    store.dispatch(action);
    expect(store.getState().history).toEqual(gameHistoryReducer(undefined, action));
  });
  test('Check that STEP_NUMBER action works for stepNumberReducer and root reducer', () => {
    const action = {
      type: 'STEP_NUMBER',
      stepNumber: historySlice.length
    }
    store.dispatch(action);
    expect(store.getState().stepNumber).toEqual(stepNumberReducer(historySlice, action));
  });
  
  test('Check that CHECK_TURN action works for x-is-next in root reducer', () => {
    const action = {
      type: 'CHECK_TURN'
    }
    store.dispatch(action);
    expect(store.getState().xIsNext).toEqual(xIsNextReducer(undefined, action))
  });
});
