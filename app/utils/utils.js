let CONSTANTS = require('./constants');
const MONGOOSE = require('mongoose');
const BCRYPT = require("bcrypt");
const JWT = require("jsonwebtoken");
// const CONFIG = require('../../config');

let commonFunctions = {};

/**
 * incrypt password in case user login implementation
 * @param {*} payloadString 
 */
commonFunctions.hashPassword = (payloadString) => {
  return BCRYPT.hashSync(payloadString, CONSTANTS.SECURITY.BCRYPT_SALT);
};

/**
 * @param {string} plainText 
 * @param {string} hash 
 */
commonFunctions.compareHash = (payloadPassword, userPassword) => {
  return BCRYPT.compareSync(payloadPassword, userPassword);
};

/** used for converting string id to mongoose object id */
commonFunctions.convertIdToMongooseId = (stringId) => {
  return MONGOOSE.Types.ObjectId(stringId);
};

/** create jsonwebtoken **/
commonFunctions.encryptJwt = (payload, expTime = '365d') => {
  return JWT.sign(payload, CONSTANTS.SECURITY.JWT_SIGN_KEY, { algorithm: 'HS256' }, { expTime: expTime });
};

commonFunctions.decryptJwt = (token) => {
  return JWT.verify(token, CONSTANTS.SECURITY.JWT_SIGN_KEY, { algorithm: 'HS256' })
}




/***************************************
 **** Logger for error and success *****
 ***************************************/
 commonFunctions.log = {
  info: (data) => {
    console.log('\x1b[33m' + data, '\x1b[0m');
  },
  success: (data) => {
    console.log('\x1b[32m' + data, '\x1b[0m');
  },
  error: (data) => {
    console.log('\x1b[31m' + data, '\x1b[0m');
  },
  default: (data) => {
    console.log(data, '\x1b[0m');
  }
};


module.exports = commonFunctions;

