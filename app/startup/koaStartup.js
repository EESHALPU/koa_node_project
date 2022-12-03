"use strict";

const dbMigrations = require("../utils/dbMigrations");
const dotenv = require('dotenv').config();
const CONFIG = require('../../config')
const json = require('koa-json');
const KoaBodyParser = require('koa-bodyparser');
const koaHelmet = require('koa-helmet')
const KoaResponseTime = require('koa-response-time')
const allRoutes = require('../routes/index')
const koaStatic = require('koa-static');
const {log} = require('../utils/utils')
const winston = require('winston');

const logConfiguration = {
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.label({
            label: `Label🏷️`
        }),
        winston.format.timestamp({
           format: 'MMM-DD-YYYY HH:mm:ss'
       }),
        winston.format.printf(info => `LOGGER: ${info.level}: ${info.label}: ${[info.timestamp]}: ${info.message}`),
    )
};

const logger = winston.createLogger(logConfiguration);

logger.log({
    // Message to be logged
        message: 'Winston Logger',
    
    // Level of the message logging
        level: 'info'
    });
    // Log a message


module.exports = async function (app) {    
    app.use(json())
    app.use(KoaBodyParser())
    app.use(KoaResponseTime())
    // app.use(KoaLogger((str) => { logger.info(str) }))
    app.use(koaHelmet())
    app.use(allRoutes.routes())
    app.use(allRoutes.allowedMethods())
    app.use(koaStatic('./public'));
 


    app.use( async ctx =>{
        ctx.redirect('index.html')
    })



    // initialize mongodb 
    await require('./db_mongo')();

    app.listen(process.env.SERVER_PORT,()=>{console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`)})

     /* -- database migration
    */
     await dbMigrations.migerateDatabase();
};
