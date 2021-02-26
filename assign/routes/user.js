const express = require('express')
const rootPath = require('../utils/path')
const path = require('path')

const router = express.Router()

const users = []

router.get('/', (req, res) => {
    console.log(users)
    res.render('users', {pageTitle: "Users", users})
})

router.post('/', (req, res) => {
    const fields = req.body
    const { name, age } = fields
    users.push({name, age})
    res.redirect('/')
})

exports.router = router
exports.users = users