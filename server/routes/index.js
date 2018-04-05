const router = require('koa-router')({
  // prefix: '/weapp'
})
const controllers = require('../controllers')

const { auth: { authorizationMiddleware, validationMiddleware } } = require('../qcloud')

router.get('/download/:temp_file_name', controllers.download)

router.get('/login', authorizationMiddleware, controllers.login)

router.get('/message', controllers.message.get)
router.post('/message', controllers.message.post)

router.get('/notes/:note_id', validationMiddleware, controllers.notes.getNote)

router.get('/donate/place_order', validationMiddleware, controllers.donate.placeOrder)

router.get('/tunnel', controllers.tunnel.get)
router.post('/tunnel', controllers.tunnel.post)

router.get('/tutor', validationMiddleware, controllers.tutors.getTutor)

module.exports = router
