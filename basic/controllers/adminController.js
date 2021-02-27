const Product = require('../models/product')

exports.createProduct = (req, res) => {
    res.render('admin/add-product', {pageTitle: "Add Product", addActive: true})
}

exports.insertProduct = (req, res) => {
    const { title, imageUrl, price, description } = req.body
    const product = new Product(title, imageUrl, description, price)
    product.save()
    res.redirect('/')
}

exports.showProducts = (req, res) => {
    Product.getProducts((products) => {
        res.render('admin/product-list', {
            products,
            adminProductsActive: true,
            pageTitle: 'Products'
        })
    })
}

exports.editProduct = (req, res) => {
    const { id } = req.params
    Product.getProduct(id, product => {
        res.render('admin/edit-product', {
            product
        })
    })
}

exports.updateProduct = (req, res) => {
    
}