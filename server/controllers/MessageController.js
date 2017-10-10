/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import isEmpty from 'lodash/isEmpty';

import messageSchema from '../models/Message';
import getErrorMessage from '../helpers/getErrorMessage';
import Validations from '../helpers/Validations';


const validate = new Validations();
const Message = mongoose.model('Message');

/**
 * @class
 */
class MessageController {
  /**
   * @function sendMessage
   * 
   * @param {Object} request
   * @param {Object} response
   * 
   * @returns {void}
   */
  static sendMessage(request, response) {
    const { errors, isValid } = validate.messageInput(request.body);
    console.log(errors);
    if (!isValid) {
      response.status(400).json({ errors });
    } else {
      const newMessage = new Message(request.body);
      newMessage.save().then((message) => {
        console.log(message);
        response.status(201).json({ message });
      })
        .catch((error) => {
          response.json({ error });
        });
    }
  }
}

export default MessageController;