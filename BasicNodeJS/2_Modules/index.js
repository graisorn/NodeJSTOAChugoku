// import util.js
const util = require('./util')

//import  แบบ destruct
const {calculateVat,sayHello} = require('./util')
//เรียกใช้ ๊Util


util.sayHello()
const vat = util.calculateVat(100,7)
console.log(vat)
// เรียกใช้ แบบ destruct
const vat2 = calculateVat(200,7)
sayHello()
console.log(vat2)
