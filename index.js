var express = require('express')

var app = express()

app.use(express.static('public'))

require('./todos/db')

const shop = require('./modules/shop')

const server = require('./modules/server')

const yunjiazheng1 = require('./modules/yunjiazheng1')

const yunjiazheng2 = require('./modules/yunjiazheng2')

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

app.get('/yunjiazheng1list',function (req,res) {
  yunjiazheng1.find({},function (err,list) {
    res.send({list:list})
  })
})

app.get('/yunjiazheng2list',function (req,res) {
  var page = req.query.page
  yunjiazheng2.find({}).limit(10).skip((page-1)*10).exec(function (err,data) {

      res.send({data:data})

  })
})


app.listen(3000)