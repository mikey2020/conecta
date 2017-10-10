import { expect } from 'chai';

import reducer from '../../src/reducers/user';
import * as types from '../../src/actions/types';


describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isAuthenticated: false,
        user: {}
      }
    );
  });

  it('should return  a new state for case `LOGIN_USER` ', () => {
    expect(reducer(
      {
        isAuthenticated: false,
        user: {}
      }, {
        type: types.LOGIN_USER,
        user: {
          username: 'mike',
          email: 'mike@gmail.com'
        }
      })).toEqual(
      {
        isAuthenticated: true,
        user: {
          username: 'mike',
          email: 'mike@gmail.com'
        }
      }
    );
  });

  it('should return  a new state for case `LOGOUT_USER` ', () => {
    expect(reducer(
      {
        isAuthenticated: true,
        user: {
          username: 'mike',
          email: 'mike@gmail.com'
        }
      },
      {
        type: types.LOGOUT_USER,
        user: {}
      })
    ).toEqual(
      {
        isAuthenticated: false,
        user: {} }
    );
  });
});
