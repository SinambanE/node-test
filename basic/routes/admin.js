const express = require('express')
const { route } = require('./shop')
const path = require('path')

const controller = require('../controllers/productController')

const router = express.Router()

router.get('/add-product', controller.createProduct)

router.post('/add-product', controller.insertProduct)

module.exports = router