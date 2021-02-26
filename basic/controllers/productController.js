const Product = require('../models/product')

const createProduct = (req, res) => {
    res.render('add-product', {pageTitle: "Add Product", addActive: true})
}

const insertProduct = (req, res) => {
    const product = new Product(req.body.title)
    product.save()
    res.redirect('/')
}

const getProducts = (req, res, next) => {
    Product.getProducts((products) => {
        res.render('shop', {products, pageTitle: 'Shop', shopActive: true, hasProducts: products.length > 0})
    })
}

module.exports = {
    createProduct,
    insertProduct,
    getProducts,
}