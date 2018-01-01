/* eslint-disable import/no-extraneous-dependencies */
import { SEND_MESSAGE } from '../actions/types';


export default (state = [], action = {}) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return [
        ...state,
        {
          message: action.message.content,
          receiver: action.message.receiver
        }
      ];

    default: return state;
  }
};
