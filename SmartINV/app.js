//import Express
const express = require('express')


//import ejs layout
const expressLayouts = require('express-ejs-layouts')
//import file frontend.js
const frontendRouter = require('./routes/frontend')
//import backend
const backendRouter = require('./routes/backend')



//create express object
const app = express()
//กำหนด Pathให้ express รุ้ว่า images CSS อยู่ ยฟะ้ ไหร
app.use(express.static('assets'))

//กำหนด Template Egine
app.use(expressLayouts)
app.set('layout','./layouts/frontend')
app.set('view engine','ejs')

//เรียกใช้ Route
app.use('/',frontendRouter)
app.use('/backend',backendRouter)

//run express server
app.listen(5000,()=>{
    console.log("Web Server run at port 5000")
})


