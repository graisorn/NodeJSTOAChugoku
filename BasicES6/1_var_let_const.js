//ปัญหา การใช้ var
// var fname = "John"
// {
//         var fname ="Jany"
// }

// console.log(fname)

// //ตัวอย่างปัญหาอื่นๆ ที่เกิดกับ var
// var messages = ['Hello','JavaScript','ES2015']
// //loop
// for(var i=0; i<=messages.length; i++){
//    //console.log(i)
//     // delay
//     setTimeout(function(){
//         console.warn(i)
//         console.warn(messages[i])
//     },1000)
// }

// use let 
// let fullname ="John"
// {
//         let fullname ="Jany"
//         console.log(fullname)
// }
// console.log(fullname)
// fullname ="Joey"
// console.log(fullname)

//use Const
const firstname ="Graisorn"
//Try to change Const
///firstname ="Kraisorn"  //เปลี่ยนไม่ได้
console.log(firstname)