const express = require('express')
const router = express.Router()
const shopController = require('../controllers/shopController')

router.get('/', shopController.shopIndex)
router.get('/products', shopController.getProducts)
router.get('/products/:id', shopController.getProduct)
router.get('/cart', shopController.viewCart)
router.post('/cart', shopController.addToCart)
router.get('/orders', shopController.viewOrders)
router.get('/checkout', shopController.getCheckout)

module.exports = router