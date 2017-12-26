import reducer from '../../reducers/user';
import * as types from '../../actions/types';


describe('User reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        isAuthenticated: false,
        user: {}
      }
    );
  });

  it('should return a new state for case `SET_USER_DETAILS` ', () => {
    expect(reducer(
      {
        isAuthenticated: false,
        user: {}
      }, {
        type: types.SET_USER_DETAILS,
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

  it('should return a new state for case `UNSET_USER_DETAILS` ', () => {
    expect(reducer(
      {
        isAuthenticated: true,
        user: {
          username: 'mike',
          email: 'mike@gmail.com'
        }
      },
      {
        type: types.UNSET_USER_DETAILS,
        user: {}
      })
    ).toEqual(
      {
        isAuthenticated: false,
        user: {} }
    );
  });
});
