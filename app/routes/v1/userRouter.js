const KoaRouter = require('koa-router')
/* const roles = require('koa-jwt-roles') */
const service = require('../services/user-service')
const router = new KoaRouter({ prefix: '/api/private/users' })



module.exports = router.routes()