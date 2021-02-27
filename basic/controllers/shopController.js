const Product = require('../models/product')
const Cart = require('../models/cart')

exports.shopIndex = (req, res) => {
    Product.getProducts((products) => {
        res.render('shop/index', {
            products, 
            pageTitle: 'Shop', 
            indexActive: true, 
        })
    })
}

exports.getProducts = (req, res) => {
    Product.getProducts(products => {
        res.render('shop/product-list', {
            products,
            pageTitle: 'Product List',
            productsActive: true
        })
    })
}

exports.getProduct = (req, res) => {
    const { id } = req.params
    Product.getProduct(id, (product) => {
        res.render('shop/product-details', {
            product,
            pageTitle: product.title,
            productsActive: true,
        })
    })
}

exports.addToCart = (req, res) => {
    let { id, price } = req.body
    Product.getProduct(id, product => {
        Cart.addProduct(id, price)
    })
    res.redirect('/cart')
}

exports.viewCart = (req, res) => {
    res.render('shop/cart', {
        pageTitle: "Cart",
        cartActive: true,
    })
}

exports.viewOrders = (req, res) => {
    res.render('shop/orders', {
        pageTitle: "Orders",
        ordersActive: true,
    })
}

exports.getCheckout = (req, res) => {
    res.render('shop/checkout', {
        pageTitle: 'Checkout',
        checkoutActive: true,
    })
}

