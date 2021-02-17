const request = require('request')
const geoCode = (address, callback) => {
    const geoCodeToken = process.env.GEO_CODE_TOKEN
    const parsedAddress = encodeURIComponent(address)
    const geocodingUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${parsedAddress}.json?access_token=${geoCodeToken}&limit=1`
    
    // geolocation request
    request({url: geocodingUrl, json: true}, (err, res) => {
        if (err) {
            callback("Unable to connect to geolocation api!", undefined)
        } else if (!res.body.features.length) {
            callback("No match found!", undefined)
        } else {
            callback(undefined, {
                longitude: res.body.features[0].center[0],
                latitude: res.body.features[0].center[1],
                location: res.body.features[0].place_name
            })
        }
    })
}

module.exports = geoCode