'use strict';

const {ERROR_TYPES} = require('../utils/constants');
const MESSAGES = require('../utils/messages')
const HELPERS = require("../helpers");
const UserModel = require('../models/userModel')
const dbService = require('../services/dbService')
const sessionService = require('../services/sessionService')

const { compareHash, encryptJwt,  decryptJwt, hashPassword } = require('../utils/utils');

/**************************************************
 ***************** user controller ***************
 **************************************************/

let userController = {};

/**
 * function to get server response.
 * @returns 
 */
userController.checkServer = async (ctx) => {
    ctx.body = {status:200,'message': MESSAGES.SERVER_IS_WORKING_FINE};
};


userController.login = async(payload) => {
    let criteria = {email:payload.email}
    console.log('criteria',criteria)
    let user = await dbService.findOne(UserModel,criteria)
    if (user) {
        // compare user's password.
        if (compareHash(payload.password, user.password)) {
          const dataForJwt = {
            id: user._id,
            date: Date.now()
          };
          delete user.password;
          let token = await encryptJwt(dataForJwt);
          let data = { userId: user._id, token: token, userType: user.userType, }
          // create session for particular user
          await sessionService.createSession(data);
          return Object.assign(HELPERS.responseHelper.createSuccessResponse(MESSAGES.LOGGED_IN_SUCCESSFULLY),{ token, user });
        }
        throw HELPERS.responseHelper.createErrorResponse(MESSAGES.INVALID_PASSWORD, ERROR_TYPES.BAD_REQUEST);
      }

    // payload.body = Object.assign(HELPERS.responseHelper.createSuccessResponse(MESSAGES.USER_REGISTERED_SUCCESSFULLY),{data:data} )
}


module.exports = userController;