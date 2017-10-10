import { expect } from 'chai';

import reducer from '../../src/reducers/message';
import * as types from '../../src/actions/types';


describe('Message reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual([]);
  });

  it('should return  a new state for case `LOGIN_USER` ', () => {
    expect(reducer(
      {}, {
        type: types.SEND_NEW_MESSAGE,
        message: {
          content: 'am testing this application',
          receiver: 'mike'
        }
      })).toEqual(
      {
        content: 'am testing this application',
        receiver: 'mike'
      }
    );
  });
});
