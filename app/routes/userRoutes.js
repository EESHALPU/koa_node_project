
const {Joi}  = require('../utils/joiUtils');
const Router = require('koa-router')
const userController = require('../controllers/userController')
const router = new Router()
const userRoutes = [

    router.get('/user',(ctx)=>{
        ctx.body={message:'User API is working fine...'}
        userController.createUser('data is sending from routes')
    })   
    
    // console.log('user Routes----Executing')
]



module.exports = userRoutes