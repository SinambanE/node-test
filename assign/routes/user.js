const express = require('express')
const rootPath = require('../utils/path')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(path.resolve(rootPath, 'views/users.html'))
})

module.exports = router