/* eslint-disable import/no-extraneous-dependencies */
import isEmpty from 'lodash/isEmpty';
import { SET_USER_DETAILS, UNSET_USER_DETAILS } from '../actions/types';

const initialState = {
  isAuthenticated: false,
  user: {}
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_USER_DETAILS:
      return { ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user
      };

    case UNSET_USER_DETAILS:
      return { ...state,
        isAuthenticated: false,
        user: {}
      };

    default: return state;
  }
};
