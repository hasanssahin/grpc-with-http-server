const router = require('express').Router()
const { createNewUser } = require('../controllers/user')

router.post('/', createNewUser)

module.exports = router
