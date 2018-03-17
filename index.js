var express = require('express')

var app = express()

app.use(express.static('public'))

require('./todos/db')

const shop = require('./modules/shop')

const server = require('./modules/server')

app.get('/shoplist',function (req,res) {
  shop.find({},function (err,list) {
    res.send({list:list})
  })
})

app.get('/serverlist',function (req,res) {
  server.find({},function (err,list) {
    res.send({list:list})
  })
})

app.listen(3000)