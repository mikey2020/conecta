import axios from 'axios';
import { SEND_MESSAGE } from './types';


/**
 * @class
 */
class MessageActions {
  /**
   * 
   * @param {Object} message 
   * 
   * @returns {void}
   */
  static postMessage(message) {
    return {
      type: SEND_MESSAGE,
      message
    };
  }

  /**
     * @param {Object} message
     * 
     * @returns {void}
    */
  static sendMessage(message) {
    return (dispatch) => {
      return axios.post('api/v1/user/message', message)
        .then(
          (res) => {
            if (res.data.message) {
              dispatch(MessageActions.postMessage(res.data.message));
            }
          }
        )
        .catch((err) => { console.log(err); });
    };
  }
}

export default MessageActions;
