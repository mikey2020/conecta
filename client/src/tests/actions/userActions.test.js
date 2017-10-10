/* global jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { expect } from 'chai';
import MockLocalStorage from 'mock-localstorage';

import * as mockUsers from './../__mocks__/mockUsers';
import * as actions from '../../src/actions/userActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('User Actions', () => {
  it('should sign up or register a new user', () => {
    axios.post = jest.fn(() =>
      Promise.resolve({
        data: {
          message: 'naruto signed up',
          userToken: 'exampletoken'
        }
      })
    );

    const store = mockStore({});
    const expectedActions = [
      {
        type: 'REGISTER_NEW_USER',
        user: {
          username: 'naruto',
          email: 'naruto@konoha.com'
        }
      }
    ];
    return store.dispatch(actions.registerUser(mockUsers.naruto)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
