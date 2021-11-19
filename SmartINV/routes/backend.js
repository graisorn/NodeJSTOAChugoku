//import Express
const express = require('express')
const router = express.Router()
//สร้าง method  ในการทำงานบน Server
router.get('',(req,res)=>{
    //res.send('<h1>Hello  Express</h1>')
    //res.json({name:'Graisorn',email:'graisorn@gmail.com'})
    res.render('pages/backend/dashboard',
        {
            title: 'Dashboard',
            heading: 'Dashboard',
            layout: './layouts/backend'

        }
    )
 })

 

 module.exports = router