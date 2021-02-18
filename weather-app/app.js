const { errMessage, successMessage } = require('./utils.js')
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
const location = process.argv[2]

if (location) {
    geoCode(location, (err, { latitude, longitude, location } = {}) => {
        if (err) {
            return errMessage(err)
        } 
        forecast(latitude, longitude, (err, weatherRes) => {
            if (err) {
                return errMessage(err)
            }
            successMessage(location)
            successMessage(weatherRes)
        })
    })
} else {
    errMessage("Please provide a location!")
}