const express = require('express')
const router = express.Router()

const { users } = require('./user')

router.get('/', (req, res) => {
    res.render('index', {pageTitle: 'Index', users})
})

module.exports = router