const chalk = require('chalk')
const errMessage = (msg) => {
    console.log(chalk.red.inverse(msg))
} 
const successMessage = (msg) => {
    console.log(chalk.green.inverse(msg))
} 

module.exports = {
    errMessage: errMessage,
    successMessage: successMessage,
}