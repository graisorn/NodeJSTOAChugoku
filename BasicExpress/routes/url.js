const express = require('express')
const router = express.Router()
//สร้าง method  ในการทำงานบน Server
router.get('/',(req,res)=>{
    //res.send('<h1>Hello  Express</h1>')
    //res.json({name:'Graisorn',email:'graisorn@gmail.com'})
    res.render('pages/index.ejs')
 })

 router.get('/about',(req,res)=>{
     //res.send('<h1>About Page</h1>')
     res.render('pages/about.ejs')
 })

 router.post('submit',(req,res)=>{
    res.send('<h1>Submit Page</h1>')
})

router.put('update',(req,res)=>{
    res.send('<h1>Update Success</h1>')
})

router.delete('delete',(req,res)=>{
    res.send('<h1>delete Success</h1>')
})

module.exports =router