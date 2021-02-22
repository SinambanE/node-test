const express = require('express')
const { route } = require('./shop')
const path = require('path')
const router = express.Router()

const products = []

router.get('/add-product', (req, res) => {
    console.log('add product route')
    res.sendFile(path.resolve(__dirname, '../views/add-product.html'))
})

router.post('/add-product', (req, res) => {
    products.push({ title: req.body.title })
    res.redirect('/')
})

exports.products = products
exports.routes = router