const { errMessage, successMessage } = require('./utils.js')
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const location = process.argv[2]

if (location) {
    geoCode(location, (err, res) => {
        if (err) {
            return errMessage(err)
        } 
        forecast(res.latitude, res.longitude, (err, weatherRes) => {
            if (err) {
                return errMessage(err)
            }
            successMessage(res.location)
            successMessage(weatherRes)
        })
    })
} else {
    errMessage("Please provide a location!")
}