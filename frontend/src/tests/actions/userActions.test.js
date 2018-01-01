/* global jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockLocalStorage from 'mock-localstorage';

import * as mockUsers from './../__mocks__/mockUsers';
import UserActions from '../../actions/UserActions';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  it('should sign up or register a new user', () => {
    axios.post = jest.fn(() =>
      Promise.resolve({
        data: {
          userToken: 'exampletoken'
        }
      })
    );

    const store = mockStore({});
    const expectedActions = [
      {
        type: 'SET_USER_DETAILS',
        user: null
      }
    ];
    return store.dispatch(UserActions.register(mockUsers.naruto)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should login a user', () => {
    axios.post = jest.fn(() =>
      Promise.resolve({
        data: {
          userToken: 'exampletoken'
        }
      })
    );

    const store = mockStore({});
    const expectedActions = [
      {
        type: 'SET_USER_DETAILS',
        user: null
      }
    ];
    return store.dispatch(UserActions.login(mockUsers.naruto)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
