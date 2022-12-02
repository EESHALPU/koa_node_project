'use strict';

const CONSTANTS = require('../utils/constants');
const MESSAGES = require('../utils/messages')

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


userController.createUser = async(payload) => {
    console.log('PAYLOAD DATA IS COMING FROM ROUTES=>',payload);
    // return createSuccessResponse('en',MESSAGES.USER_REGISTERED_SUCCESSFULLY)
   let res= { "message":MESSAGES.USER_REGISTERED_SUCCESSFULLY, "status":200}
    payload.body =res
}


module.exports = userController;