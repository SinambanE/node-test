const request = require('request')
const geoCode = (address, callback) => {
    const geoCodeToken = process.env.GEO_CODE_TOKEN
    const parsedAddress = encodeURIComponent(address)
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${parsedAddress}.json?access_token=${geoCodeToken}&limit=1`
    const option = {url, json: true}
    
    // geolocation request
    request(option, (err, { body }) => {
        if (err) {
            callback("Unable to connect to geolocation api!", undefined)
        } else if (!body.features.length) {
            callback("No match found!", undefined)
        } else {
            callback(undefined, {
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode