const doWorkCallback = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve([4, 5, 6])
        reject('Error!')
    }, 2000)
})

doWorkCallback.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
})