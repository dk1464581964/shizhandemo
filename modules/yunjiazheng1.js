const mongoose = require('mongoose')
var Schema = mongoose.Schema

const serSchema = new Schema({
  id:{type:String},
  title:{type:String},
  name:{type:String},
  desc:{type:String},
  price:{type:Number},
  oldPrice:{type:Number},
  orderCount:{type:Number},
  soldCount:{type:Number},
  commentCount:{type:Number},
  accept:{type:String},
  praise:{type:String},
  imgUrl:{type:String},
  company:{type:String},
  profile:{type:String},
},{
  collection:'yunjiazheng1'
})
module.exports = mongoose.model('yunjiazheng1',serSchema)