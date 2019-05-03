const express = require('express')
const market = require('../controllers/Market.js')
const router = express.Router()

router.get('/', market.index)
router.get('/name/:baseSymbol', market.getBaseSymbol)
router.get('/name/:marketName', market.getMarketName)





module.exports = router