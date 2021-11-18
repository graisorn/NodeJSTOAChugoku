//Node JS Builtin Module
//1.File System (FS)
//2.PAth (path)
//3.Operating System (os)
//4.Events (event)
//5.HTTP (http)

//Path (path) Module
const path = require('path')

console.log(path.basename(__filename))
console.log(path.dirname(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))

//File System(fs)
const fs =require('fs')
//write File
fs.writeFileSync(path.join(__dirname,'data.txt'),'Hello NodeJS')

//read
console.log(fs.readFileSync(path.join(__dirname,'data.txt'),'utf8'))

//Operating System
const os = require('os')

console.log(os.cpus())
console.log(os.homedir())
console.log(os.uptime())
console.log(os.platform())
console.log(os.release())
console.log(os.arch())
console.log(os.type())
console.log(os.loadavg())
console.log(os.networkInterfaces())
console.log(os.hostname())
console.log(os.networkInterfaces()['Wi-Fi'][1].address)
