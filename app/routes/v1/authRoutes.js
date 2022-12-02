const KoaRouter = require('koa-router')
const userController = require('../../controllers/userController')
const router = new KoaRouter({ prefix: '/api/public/auth' })

router.get('/',userController.checkServer)
router.get('/login', userController.createUser)

module.exports = router.routes()