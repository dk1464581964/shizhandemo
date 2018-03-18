const mongoose = require('mongoose')
var Schema = mongoose.Schema

const serSchema = new Schema({
  iconUrl:{type:String},
  area:{type:String},
  city:{type:String},
  comment:{type:String},
  createtime:{type:Number},
  nick:{type:String},
  star:{type:Number},
},{
  collection:'yunjiazheng2'
})
module.exports = mongoose.model('yunjiazheng2',serSchema)