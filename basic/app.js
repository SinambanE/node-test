const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootPath = require('./utils/path')

const PORT = process.env.PORT
const app = express()

app.set('view engine', 'pug')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controllers/errorController')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.resolve(rootPath, './public')))

// register routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use(errorController.get404)

app.listen(PORT)