const express = require('express')
const rootPath = require('../utils/path')
const path = require('path')

const router = express.Router()

router.get('/', (req, res) => {
    console.log(rootPath)
    res.sendFile(path.resolve(rootPath, 'views/index.html'))
})

module.exports = router