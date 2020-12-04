import * as c from './../actions/ActionTypes';

const xIsNextReducer = (state = true, action) => {
  switch(action.type) {
    case c.CHECK_TURN:
      return !state;
    default:
      return state;
  }
};

export default xIsNextReducer;