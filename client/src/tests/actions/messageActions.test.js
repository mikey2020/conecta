/* global jest */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import { expect } from 'chai';
import MockLocalStorage from 'mock-localstorage';

import * as mockMessages from './../__mocks__/mockMessages';
import * as actions from '../../src/actions/messageActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Message Actions', () => {
  it('should send message to a user successfully', () => {
    axios.post = jest.fn(() =>
      Promise.resolve({
        data: {
          message: mockMessages.successMessage
        }
      })
    );

    const store = mockStore({});
    const expectedActions = [
      {
        type: 'SEND_NEW_MESSAGE',
        message: mockMessages.successMessage
      }
    ];
    return store.dispatch(actions.registerUser(mockMessages.successMessage))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
});
