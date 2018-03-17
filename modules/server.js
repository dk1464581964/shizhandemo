const mongoose = require('mongoose')
var Schema = mongoose.Schema

const serSchema = new Schema({
  id:{type:String,unique:true},
  title:{type:String},
  orderCount:{type:Number},
  positiveRate:{type:String},
  imgUrl:{type:String},
},{
  collection:'server'
})
module.exports = mongoose.model('server',serSchema)
