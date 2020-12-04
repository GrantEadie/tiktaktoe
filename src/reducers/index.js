import gameHistoryReducer from './game-history-reducer.js';
import stepNumberReducer from './step-number-reducer.js';
import xIsNextReducer from './x-is-next-reducer.js';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: gameHistoryReducer,
  stepNumber: stepNumberReducer, 
  xIsNext: xIsNextReducer
});

export default rootReducer;