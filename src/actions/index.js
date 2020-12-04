import * as c from './ActionTypes';

export const addHistory = (squares, history) => {
  return {
    type: c.ADD_HISTORY,
    squares: [{ squares: squares }],
    history: history
  }
}

export const stepNumber = (step) => {
  return {
    type: c.STEP_NUMBER,
    stepNumber: step
  }
}

export const xIsNext = () => {
  return {
    type: c.CHECK_TURN
  }
}