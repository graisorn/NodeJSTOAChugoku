//import Express
const express = require('express')
//import file url.js
const urlRouter = require('./routes/url')


//create express object
const app = express()
//กำหนด Pathให้ express รุ้ว่า images CSS อยู่ ยฟะ้ ไหร
app.use(express.static('assets'))

//เรียกใช้ Route
app.use('/',urlRouter)

//run express server
app.listen(3000,()=>{
    console.log("Web Server run at port 3000")
})