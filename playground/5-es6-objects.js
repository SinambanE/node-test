const name = "Andrew"
const userAge = 27

const user = {name, userAge}

// console.log(user)

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.2
}

const { label: productLabel, stock, rating = 0 } = product
console.log(productLabel, stock, rating)

const transaction = (type, { label = 'None', stock = 0} = {}) => {
    console.log(type, label, stock)
}

transaction('order')