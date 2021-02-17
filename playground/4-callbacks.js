setTimeout(() => {
    console.log('Two seconds are up!')
}, 2000)

// const geoCode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             latitude: 0,
//             longitude: 0,
//         }
//         callback(data)
//     }, 2000)
// }

// geoCode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (first, second, callback) => {
    setTimeout(() => {
        callback(first + second)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
