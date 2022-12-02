"use strict";

const dbMigrations = require("../utils/dbMigrations");
const dotenv = require('dotenv').config();
const CONFIG = require('../../config')
const Router = require('koa-router')
const KoaBodyParser = require('koa-bodyparser');
const koaHelmet = require('koa-helmet')
const KoaResponseTime = require('koa-response-time')
const allRoutes = require('../routes/index')
// const KoaLogger = require('koa-logger')
    
module.exports = async function (app) {    
    app.use(KoaBodyParser())
    app.use(KoaResponseTime())
    // app.use(KoaLogger((str) => { logger.info(str) }))
    app.use(koaHelmet())
    app.use(allRoutes.routes())
    app.use(allRoutes.allowedMethods())

    // initialize mongodb 
    await require('./db_mongo')();
    
    app.listen(process.env.SERVER_PORT,()=>{console.log(`Server is running at http://localhost:${process.env.SERVER_PORT}`)})

     /* -- database migration
    */
     await dbMigrations.migerateDatabase();
};
