const express = require('express')
const controller = require('../controllers/adminController')

const router = express.Router()

router.get('/products/create', controller.createProduct)
router.post('/products', controller.insertProduct)
router.get('/edit-product/:id', controller.editProduct)
router.get('/products', controller.showProducts)

module.exports = router