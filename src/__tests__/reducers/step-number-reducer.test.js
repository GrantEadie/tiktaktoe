import stepNumberReducer from '../../reducers/step-number-reducer'


const history = [
  {squares: [null, null, null, null, null, null, null, null, null]},
  {squares: ['X', null, null, null, null, null, null, null, null]}
];

const historySlice = history.slice(0, 2 + 1);
const currentStepNumber = 0;


describe("stepNumberReducer", () => {
  test('Should return default state if no action type is recognized', () => {
    expect(stepNumberReducer(0, { type: null })).toEqual(0);
  });

  test('Should return the length of the history as the new step number', () => {
    const action = {
      type: 'STEP_NUMBER',
      stepNumber: historySlice.length
    };
    expect(stepNumberReducer(currentStepNumber, action)).toEqual(2);
  });
});