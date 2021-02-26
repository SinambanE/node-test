const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const rootPath = require('./utils/path')
const PORT = process.env.PORT

// const rootPath = require('./utils/path')
const { router: userRouter} = require('./routes/user')
const mainRouter = require('./routes/main')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.urlencoded({extended: false}))

app.use(mainRouter)
app.use('/users', userRouter)

app.use((req, res) => {
    res.status(404).render('404', {pageTitle: "404 Page Not Found"})
})

app.listen(PORT)