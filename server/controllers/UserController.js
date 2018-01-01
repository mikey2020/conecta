/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
import isEmpty from 'lodash/isEmpty';

import UserSchema from '../models/User';
import getErrorMessage from '../helpers/getErrorMessage';
import Validations from '../helpers/Validations';
import generateToken from '../helpers/generateToken';

const validate = new Validations();
const User = mongoose.model('User');
/**
 * @class
 *
 * @description - User controller class
 */
class UserController {
  /**
   * @description - It registers a user to the database and
   * it returns a user token
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {void}
   */
  static register(request, response) {
    const { errors, isValid } = validate.register(request.body);
    if (!isValid) {
      return response.status(400).json({ errors });
    }
    const newUser = new User(request.body);
    // const { username } = request.body;
    newUser.save()
      .then((user) => {
        response.status(201).json(
          {
            userToken: generateToken(user)
          }
        );
      })
      .catch((error) => {
        response.status(409).json(
          {
            message: getErrorMessage(error)
          }
        );
      });
  }

  /**
   * @description - It logs a user into the application
   *
   * @returns {Object} - response object
   *
   * @param {Object} request
   * @param {Object} response
   */
  static login(request, response) {
    const { username, email, password } = request.body;
    User.findOne({ $or: [{ username }, { email }] })
      .select('username email password')
      .then((user) => {
        if (!isEmpty(user)) {
          if (bcrypt.compareSync(password, user.password) === true) {
            response.send(
              {
                userToken: generateToken(user)
              }
            );
          } else {
            response.json(
              {
                message: 'Invalid login'
              }
            );
          }
        } else {
          response.status(401).json(
            {
              message: 'Invalid login parameters'
            }
          );
        }
      })
      .catch((error) => {
        getErrorMessage(error);
        response.json({ error });
      });
  }
}

export default UserController;
