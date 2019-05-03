const express = require('express')
const global = require('../controllers/global.js')
const router = express.Router()

router.get('/', global.index)




module.exports = router