const express = require('express')
const coin = require('../controllers/Coin.js')
const router = express.Router()

router.get('/', coin.index)
router.get('/:name', coin.showCoinName)
router.get('/name/:slug',coin.showCoinSlug)
router.put('/:name',coin.updateName)



module.exports = router