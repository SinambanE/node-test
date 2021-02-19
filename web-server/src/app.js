const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// define paths
const publicPath = path.resolve(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// define settings for views
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// set up static pages
app.use(express.static(publicPath))

//define routes
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Eugene Sinamban',
        message: 'Welcome to my app!'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Eugene Sinamban',
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help',
        name: 'Eugene Sinamban',
        message: 'Let me help you!'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Eugene Sinamban',
        message: 'Help article not found'
    })
})

app.get('/weather', (req, res) => {
    const forecast = {
        temperature: 7,
        feelslike: 3,
    }
    res.send(forecast)
})

app.get('/products', (req, res) => {
    console.log(req.query)
    const data = {
        products: []
    }
    res.send(data)
})

app.get('*', (req, res) => {
    res.render('404', {
        title: 'Help',
        name: 'Eugene Sinamban',
        message: '404 Page not found'
    })
})

app.listen(8080, () => {
    console.log('Server is up on port 8080.')
})