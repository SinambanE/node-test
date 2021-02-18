const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const weatherToken = process.env.WEATHERSTACK_API_KEY
    const url = `http://api.weatherstack.com/current?access_key=${weatherToken}&query=${latitude},${longitude}`
    const option = {url, json: true}

    request(option, (err, { body }) => {
        if (err) {
            callback('Unable to connect to weather api!', undefined)
        } else if (body.error) {
            callback('Invalid query values!', undefined)
        } else {
            const { temperature, feelslike } = body.current
            callback(undefined, `The current temperature is ${temperature}. It feels like ${feelslike}`)
        }
    })
}

module.exports = forecast