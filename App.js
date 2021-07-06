const myModule= require("./Log")
const getConstants = require('./Constants')

console.log(getConstants)
getConstants.ProductID ='UMA'
console.log(getConstants.ProductID)
console.log(getConstants.ClientID)
console.log(myModule.info("This is a basic information"))
console.log(myModule.warning("This a gentle Warning"))
console.log(myModule.error("This is serious error"))