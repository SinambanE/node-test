const fs = require('fs')

const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON = dataBuffer.toString()
const data = JSON.parse(dataJSON)

data.name = "Eugene"
data.age = 29

const stringdata = JSON.stringify(data)

fs.writeFileSync('1-json.json', stringdata)