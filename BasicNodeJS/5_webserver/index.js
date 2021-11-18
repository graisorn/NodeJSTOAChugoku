//Import HTTP module ไว้สร้าง webserver
const http =require('http')
// import path module  เพื่ออ่านไฟล์ html
const path= require('path')
//import file module เพื่อ check ประเภทไฟล์
const fs = require('fs')
// อ่านไฟล์ html
const getPage=(page)=>{
    const filePath = path.join(__dirname,page)
    return fs.readFileSync(filePath)
}


//สรั้าง Server
http.createServer((req,res)=>{
    const fileType = path.extname(req.url) || '.html'
    if(fileType=== '.html'){
        res.setHeader('Content-Type','text/html')
        if(req.url==='/'){
            res.write(getPage('index.html'))  
        }else if(req.url=== '/about'){
            res.write(getPage(`${req.url}.html`)) 
        }  
        res.end()
    }else if(fileType === '.css'){
        res.setHeader('Content-Type','text/css')
        res.write(getPage('style.css'))
        res.end()
    }else if(fileType === '.png'){
        const img =fs.readFileSync('./images/headerjpg.png')
        res.writeHead(200,{'Content-Type':'images/png'})
        res.end(img,'binary')
    }else if(fileType === '.jpg'){
        const img =fs.readFileSync('./images/about.jpg')
        res.writeHead(200,{'Content-Type':'images/jpg'})
        res.end(img,'binary')
    }
    
    
}).listen(3000)
