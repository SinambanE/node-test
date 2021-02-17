const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherToken = process.env.WEATHERSTACK_API_KEY
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${weatherToken}&query=${latitude},${longitude}`

    request({url: weatherUrl, json: true}, (err, res) => {
        if (err) {
            callback('Unable to connect to weather api!', undefined)
        } else if (res.body.error) {
            callback('Invalid query values!', undefined)
        } else {
            const { temperature, feelslike } = res.body.current
            callback(undefined, `The current temperature is ${temperature}. It feels like ${feelslike}`)
        }
    })
}

module.exports = forecast