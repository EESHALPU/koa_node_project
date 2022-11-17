const path = require('path');

var development = require('./env/development');
var production = require('./env/production');
var staging = require('./env/staging');
var PLATFORM = process.env.PLATFORM || 'AryaTech';

var defaults = {
    PLATFORM: PLATFORM,
    ADMIN: {
        EMAIL: process.env.ADMIN_EMAIL || `admin.test@yopmail.com`,
        PASSWORD: process.env.EMAIL_PASSWORD || `Admin@123`,
        FIRST_NAME: 'ADMIN',
        LAST_NAME: 'ADMIN'
    },
    SENDGRID_API_KEY: 'CHANGEME',
    environment: process.env.NODE_ENV || 'production',
    show: function () {
        console.log('environment: ' + this.environment);
    },
    ENV_STAGING: "staging",
    ENV_DEVELOPMENT: "development",
    ENV_PRODUCTION: "production",
    environment: process.env.NODE_ENV || 'development',
    MONGODB: {
        PROTOCOL: process.env.DB_PROTOCOL || 'mongodb',
        HOST: process.env.DB_HOST || '127.0.0.1',
        PORT: process.env.DB_PORT || 27017,
        NAME: PLATFORM || 'ThinkJS',
        USER: '',
        PASSWORD: '',
        get URL() { return process.env.dbUrl || `${this.PROTOCOL}://${this.HOST}:${this.PORT}/${this.NAME}` }
    },
    domain: {
        PROTOCOL: process.env.DOMAIN_PROTOCOL || 'http',
        HOST: process.env.DOMAIN_HOST || '127.0.0.1',
        PORT: process.env.DOMAIN_PORT ? process.env.DOMAIN_PORT : '3000',
        get URL() { return `${this.PROTOCOL}://${this.HOST}${!!this.PORT ? ':' + this.PORT : ''}` }
    },
    server: {
        PROTOCOL: process.env.SERVER_PROTOCOL || 'http',
        HOST: process.env.SERVER_HOST || '0.0.0.0',
        PORT: process.env.SERVER_PORT || '4000',
        get URL() { return `${this.PROTOCOL}://${this.HOST}:${this.PORT}` }
    },

};

let currentEnvironment = process.env.NODE_ENV || 'production';

function myConfig(envConfig) {
    return { ...defaults, ...envConfig };
};

module.exports = {
    development: myConfig(development),
    production: myConfig(production),
    staging: myConfig(staging)
}[currentEnvironment];

