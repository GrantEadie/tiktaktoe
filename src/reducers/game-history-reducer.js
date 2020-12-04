import * as c from './../actions/ActionTypes';

const gameHistoryReducer = (state = [{squares: Array(9).fill(null)}], action) => {

  const { squares, history } = action;
  switch (action.type) {
    case c.ADD_HISTORY:
      console.log(history);
      return history.concat(squares)      
    default:
      return state;
  }
};

export default gameHistoryReducer;