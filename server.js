const Koa = require('koa')
const app = new Koa();

async function start () {
  require('./app/startup/koaStartup')(app)
}

start()