
// const {Joi}  = require('../utils/joiUtils');
const Koa = require('koa')
const Router = require('koa-router')
const KoaBodyParser = require('koa-bodyparser')
const app = new Koa();
const router = new Router();
app.use(KoaBodyParser())
router.get('/v1/user',(ctx)=>{
    // ctx.body={message:'User API is working fine...'}
    console.log('/v1/user');
    // userController.createUser('data is sending from routes')
})   
const userRoutes = [

    
]
console.log('user Routes----Executing')



module.exports = userRoutes