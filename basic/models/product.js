const fs = require('fs')
const path = require('path')
const rootPath = require('../utils/path')

const p = path.resolve(rootPath, 'data', 'products.json')
const getProductsFromFile = callback => {
    fs.readFile(p, (err, data) => {
        if (err) {
            callback([])
        }
        callback(JSON.parse(data))
    })
}

const saveToFile = products => {
    fs.writeFile(p, JSON.stringify(products), (err) => {
        if (err) console.log(err)
    })
}
module.exports = class Product {
    constructor(id, title, imageUrl, description, price) {
        this.id = id
        this.title = title
        this.imageUrl = imageUrl
        this.description = description
        this.price = price
    }
    // https://assets.entrepreneur.com/content/3x2/2000/20191219170611-GettyImages-1152794789.jpeg?width=700&crop=2:1
    save() {
        getProductsFromFile((products) => {
            if (this.id) {
                const existingProductIndex = products.findIndex(product => product.id === this.id)
                const updateProducts = [...products]
                updateProducts[existingProductIndex] = this
                saveToFile(updateProducts)
            } else {
                this.id = Math.random().toString() // temp id
                products.push(this)
                saveToFile(products)
            }
        })
    }

    static getProducts(callback) {
        getProductsFromFile(callback)
    }

    static getProduct(id, callback) {
        getProductsFromFile(products => {
            const product = products.find(item => item.id === id)
            callback(product)
        })
    }

}