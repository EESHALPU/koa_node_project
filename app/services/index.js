
/********************************
 **** Managing all the services ***
 ********* independently ********
 ********************************/
 module.exports = {
    userService: require('./userService'),
    sessionService: require('./sessionService'),
    dbService: require('./dbService'),
};