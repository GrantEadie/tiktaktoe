import gameHistoryReducer from '../../reducers/game-history-reducer';

describe('gameHistoryReducer', () => {

  let action;
  const firstMove = {squares: ['X', null, null, null, null, null, null, null, null]};
  const startingHistory = [
    { squares: [null, null, null, null, null, null, null, null, null] },
  ];

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(gameHistoryReducer({}, { type: null })).toEqual({});
  });

  test('Should succesfully add new slice to history array', () => {
    action = {
      type: 'ADD_HISTORY',
      history: startingHistory,
      squares: firstMove,
    };
    expect(gameHistoryReducer(startingHistory, action)).toEqual(
      [
        { squares: [null, null, null, null, null, null, null, null, null] },
        { squares: ['X', null, null, null, null, null, null, null, null] }
      ]
    );
  });
});