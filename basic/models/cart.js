const fs = require('fs')
const path = require('path')
const rootPath = require('../utils/path')
const p = path.resolve(rootPath, 'data', 'cart.json')

module.exports = class Cart {
    static addProduct(id, price) {
        // fetch previous cart
        fs.readFile(p, (err, data) => {
            let cart = {products: [], totalPrice: 0}
            if (!err) {
                cart = JSON.parse(data)
            }
            // find duplicate
            const duplicateIndex = cart.products.findIndex(item => item.id === id)
            const duplicate = cart.products[duplicateIndex]
            let updateProduct
            if (duplicateIndex !== -1) {
                updateProduct = {...duplicate}
                updateProduct.qty += 1
                cart.products = [...cart.products]
                cart.products[duplicateIndex] = updateProduct
            } else {
                updateProduct = {id: id, qty: 1}
                cart.products = [...cart.products, updateProduct]
            }
            cart.totalPrice += +price
            console.log(JSON.stringify(cart))
            fs.writeFile(p, JSON.stringify(cart), (err) => {
                if (err) console.log(err)
            })
        })
        // add new product or increase quantity
    }


}