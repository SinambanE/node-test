const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootPath = require('./utils/path')

const PORT = process.env.PORT
const app = express()

const { routes: adminRoutes } = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.resolve(rootPath, './public')))

// register routes
app.use('/admin', adminRoutes)
app.use(shopRoutes)

app.use((req, res) => {
    res.status(404).sendFile(path.resolve(rootPath, './views/404.html'))
})

app.listen(PORT)