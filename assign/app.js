const express = require('express')
const path = require('path')
const rootPath = require('./utils/path')
const PORT = process.env.PORT

// const rootPath = require('./utils/path')
const mainRouter = require('./routes/main')
const userRouter = require('./routes/user')

const app = express()

app.use(express.static(path.resolve(rootPath, 'public')))

app.use(mainRouter)
app.use('/users', userRouter)

app.use((req, res) => {
    res.status(404).sendFile(path.resolve(rootPath, 'views/404.html'))
})

app.listen(PORT)