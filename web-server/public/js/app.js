console.log('Client side js is loaded!!!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message1 = document.querySelector('#message-1')
const message2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const address = search.value

    message1.textContent = 'Loading...'
    message2.textContent = ''

    fetch(`http://localhost:8080/weather?address=${address}`)
    .then((res) => {
        res.json().then((data) => {
            if (data.error) {
                message1.textContent = data.error
            } else {
                const { location, forecast } = data
                // console.log(location, forecast)
                message1.textContent = location
                message2.textContent = forecast
            }
        })
    })

})