//import Express
const { response } = require('express')
const express = require('express')
//immport mssql
const mssql = require('mssql')
//import moment for formating date/time
const moment =require('moment')

// impoert mysql db connifg
const dbConnMySql = require('../config/mysql_dbconfig')

//import  mssql_db_config
const dbConnMsSql = require('../config/mssql_dbconfig')
// create function connect dbmssql
mssql.connect(dbConnMsSql,(err)=> {
    if(err){
        console.log("Error: "+ err)
    }else{
        console.log("MSSQL Connect DB Success...")
    }
})

const router = express.Router()

// สร้างฟังก์ชันแปลงยอดเงินให้เป็นรูปแบบสกุลเงิน (10,000.50)
const formatPrice = (value)=>{
           let val = (value/1).toFixed(2).replace(',', ',')
           return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
       }
//สร้าง method  ในการทำงานบน Server
router.get('',(req,res)=>{
    res.render('pages/backend/dashboard',
        {
            title: 'Dashboard',
            heading: 'Dashboard',
            layout: './layouts/backend'

        }
    )
 })
//MYSQL
 router.get('/mysqlproducts',(req,res)=>{
    let sql ="SELECT * FROM PRODUCTS"
    dbConnMySql.query(sql,(err,rows)=>{
        if(err){
            res.send(err)
        }else{
            //res.json(rows)
            res.render('pages/backend/mysqlproducts',
            {
                title: 'MySQL Products',
                heading: 'MySql Products',
                layout: './layouts/backend',
                data : rows,
                moment : moment,
                formatPrice:formatPrice
            }
    )
            
        }
    })
 })
//MSSQL
 router.get('/mssqlproducts',(req,res)=>{
    let sql ="SELECT * FROM PRODUCTS /*WHERE CategoryID=1*/"
    let request = new  mssql.Request()
    request.query(sql,(err,rows)=>{
        if(err){
            res.send(err)
            throw err
        }else{
            //res.json(rows.recordset)
            res.render('pages/backend/mssqlproducts',
            {
                title: 'MSSQL Products',
                heading: 'MSSQL Products',
                layout: './layouts/backend',
                data : rows.recordset,
                moment : moment,
                formatPrice:formatPrice
            }
            )
        }
    })
 })

 //Create mssql_create_products
router.get('/mssql_create_product',(req,res)=>{
    res.render('pages/backend/mssql_create_product',
        {
            title: 'MSSQL Create Products',
            heading: 'MSSQL',
            layout: './layouts/backend'

        }
    )
 })

 module.exports = router