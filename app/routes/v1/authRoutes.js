const KoaRouter = require('koa-router')
const userController = require('../../controllers/userController')
const router = new KoaRouter({ prefix: '/api/public/auth' })

router.post('/login', userController.createUser)
router.get('/',userController.checkServer)

module.exports = router.routes()