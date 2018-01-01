import axios from 'axios';
import jwt from 'jsonwebtoken';

import { SET_USER_DETAILS } from './types';

/**
 * @class UserActions
 */
class UserActions {
  /**
   * @param {Object} user
   *
   * @returns {void}
   */
  static setUser(user) {
    return {
      type: SET_USER_DETAILS,
      user
    };
  }
  /**
   * @param {Object} userDetails - User's details
   * 
   * @returns {void}
   */
  static register(userDetails) {
    return (dispatch) => {
      return axios.post('/api/v1/user/register', userDetails)
        .then(
          (res) => {
            if (res.data.userToken) {
              const userData = jwt.decode(res.data.userToken);
              dispatch(UserActions.setUser(userData));
            }
          }
        );
    };
  }

  /**
   * 
   * @param {Object} userDetails 
   * 
   * @returns {void}
   */
  static login(userDetails) {
    return (dispatch) => {
      return axios.post('/api/v1/user/login', userDetails)
        .then(
          (res) => {
            if (res.data.userToken) {
              const userData = jwt.decode(res.data.userToken);
              dispatch(UserActions.setUser(userData));
            }
          }
        );
    };
  }
}

export default UserActions;
