const fs = require('fs')
const path = require('path')
const rootPath = require('../utils/path')

module.exports = class Product {
    constructor(title) {
        this.title = title
    }

    save() {
        const p = path.resolve(rootPath, 'data', 'products.json')
        fs.readFile(p, (err, data) => {
            let products = []
            if (!err) {
                products = JSON.parse(data)
            }
            products.push(this)
            fs.writeFile(p, JSON.stringify(products), (err) => {
                if (err) {
                    console.log(err)
                }
            })
        })
    }

    static getProducts(callback) {
        const p = path.resolve(rootPath, 'data', 'products.json')
        let products = []
        fs.readFile(p, (err, data) => {
            if (err) {
                callback([])
            }
            callback(JSON.parse(data))
        })
        return products
    }
}