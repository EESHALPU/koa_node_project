const KoaRouter = require('koa-router')
const userController = require('../../controllers/userController')
const router = new KoaRouter({ prefix: '/v1/auth' })
const authService = require('../../services/authService')

router.post('/login',async(ctx)=>{
    let payload = ctx.request.body
    let data = await userController.login(payload)
    ctx.body=data;
})
    
router.get('/',userController.checkServer)

module.exports = router.routes()