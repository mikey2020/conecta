import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
/**
   * @description - It verifies a user by accessing the user's token
   *
   * @param {Object} request - signup object
   * @param {Object} response - errors object if there is any
   * @param {Function} next - returns user to next middleware
   *
   * @returns {Object} - returns error if there is any
*/
const authenticate = (request, response, next) => {
  const authorizationHeader = request.headers.authorization;
  const token = authorizationHeader || request.body.token || null;

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        return response.status(401).json(
          {
            success: false,
            message: 'Failed to authenticate token.'
          });
      }
      request.decoded = decoded;
      next();
    });
  } else {
    return response.status(401).send({
      success: false,
      message: 'No token provided'
    });
  }
};


export default authenticate;
