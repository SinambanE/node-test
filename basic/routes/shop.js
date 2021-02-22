const express = require('express')
const path = require('path')
const router = express.Router()

const adminData = require('./admin')

router.get('/', (req, res, next) => {
    console.log(adminData.products)
    res.sendFile(path.resolve(__dirname, '../views/shop.html'))
})

module.exports = router