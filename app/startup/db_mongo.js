const mongoose = require('mongoose');
const CONFIG = require('../../config/index');

module.exports = async () => {
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    await mongoose.connect(CONFIG.MONGODB.URL, options);
    console.log('Mongo connected at ', CONFIG.MONGODB.URL);
};