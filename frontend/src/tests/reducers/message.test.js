import reducer from '../../reducers/message';
import * as types from '../../actions/types';


describe('Message reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return a new state for case `SEND_MESSAGE` ', () => {
    expect(reducer(
      {}, {
        type: types.SEND_MESSAGE,
        message: {
          content: 'am testing this application',
          receiver: 'mike'
        }
      })).toEqual(
      [{
        message: 'am testing this application',
        receiver: 'mike'
      }]
    );
  });
});
