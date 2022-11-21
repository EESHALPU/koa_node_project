const Koa = require('koa')
const dotenv = require('dotenv').config();
const CONFIG = require('./config')
const Router = require('koa-router')
const KoaBodyParser = require('koa-bodyparser');
const userController = require('./app/controllers/userController')
const Routes = require('./app/routes/index')
const { compareHash, encryptJwt, decryptJwt, hashPassword }  = require('./app/utils/utils')
const app = new Koa();
const router = new Router();
app.use(KoaBodyParser())

router.get('/',(ctx)=>{
    ctx.body={message:'Server is working'}
})

router.post('/login',async(ctx,next)=>{
    console.log('login routes called',ctx.request.body)
    data = ctx.request.body
    let dataForJwt ={
        name: data.name,
        _id:data._id
    }
    let token = encryptJwt(dataForJwt)
    console.log('Token=>',token)
    let decrptToken = decryptJwt(token)
    console.log("decrypt token",decrptToken)
})


app
.use(router.routes())
.use(router.allowedMethods())
.use(KoaBodyParser())
require('./app/startup/koaStartup')(app);


app.listen(process.env.SERVER_PORT,()=>console.log(`Server is running on PORT:`+process.env.SERVER_PORT))
