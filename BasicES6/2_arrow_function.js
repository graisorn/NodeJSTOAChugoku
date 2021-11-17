// ES5
var greet = function(name,message){
    return message + name
}
console.log(greet('Graisorn','Hello '))

//ES6

const arrowGreet =(name,message)=>{
    return message + name
}

console.log(arrowGreet('Graisorn','Welcome '))

//ลดรูป กรณี Return อย่างเดียว
const arrowGreet2 = (name,message)=>message + name
console.log(arrowGreet2('Grai','สวัสดี '))

//ลดรูป กรณี รับ parm แค่ 1 parm
const arrowGreet3 =message=>message
console.log(arrowGreet3('Hello every one'))

//ตัวอย่าง
const square = x =>x*x
console.log(square(3))

//QA
const sayHi = name =>{
    const result = 'Hello ' + name
    return result
}
console.log(sayHi('Grai'))