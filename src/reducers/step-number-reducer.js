import * as c from './../actions/ActionTypes'

const stepNumberReducer = (state = 0, action) => {
  const { stepNumber } = action;
  switch(action.type) {
    case c.STEP_NUMBER:
      return stepNumber;
    default: 
      return state;
  }
}

export default stepNumberReducer;