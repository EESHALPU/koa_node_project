const KoaRouter = require('koa-router')
const auth = require('./v1/authRoutes')

const router = new KoaRouter()
// router.use(home)
router.use(auth)

module.exports = router