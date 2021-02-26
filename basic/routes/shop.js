const express = require('express')
const path = require('path')
const router = express.Router()
const controller = require('../controllers/productController')

router.get('/', controller.getProducts)

module.exports = router