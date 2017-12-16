/* eslint-disable import/no-extraneous-dependencies */
import mongoose from 'mongoose';

const Connection = mongoose.model('Connection');

/**
 * @class
 */
class ConnectionController {
  /**
     * @method connect
     * 
     * @description - It link one or more users together
     * 
     * @param {Object} request - signup object
     * @param {Object} response - errors object if there is any
     * 
     * @returns {void}
     */
  static connect(request, response) {
    const { userId } = request.params;
    const { id } = request.decoded.data;
    if (request.params.userId && request.decoded.data.username) {
      const newConnection = new Connection({
        firstConnectorId: userId,
        secondConnectorId: id
      });
      newConnection.save().then(() => {
        response.status(201).json({
          message: 'connection made succesfully'
        });
      })
        .catch(() => {
          response.status(500).json({
            message: 'Internal Server Error'
          });
        });
      response.status(201).json({
        message: 'Connection made successfully'
      });
    } else {
      response.status(400).json({
        message: 'Connection could not be made'
      });
    }
  }
}


export default ConnectionController;
