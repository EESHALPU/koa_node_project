"use strict";

const dbMigrations = require("../utils/dbMigrations");
const dotenv = require('dotenv').config();
const CONFIG = require('../../config')
const Router = require('koa-router')
const json = require('koa-json');
const KoaBodyParser = require('koa-bodyparser');
const koaHelmet = require('koa-helmet')
const KoaResponseTime = require('koa-response-time')
const allRoutes = require('../routes/index')
const koaStatic = require('koa-static');
// const KoaLogger = require('koa-logger')
   
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
