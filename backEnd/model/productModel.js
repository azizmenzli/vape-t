 const mongoose=require('mongoose')
//  const user = require ('./userModel')
module.exports={
    Atomizer:mongoose.model('Atomizer',{
     nameBrand:{type:String},
     price:{type:Number},
     brand:{type:String},
     imgSrc:{type:String},
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },

   }),
    Liquides:mongoose.model('Liquides',{
     name:{type:String},
     price:{type:Number},
     description:{type:String},
     imgSrc:{type:String},
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   

   }),
   
    Mode:mongoose.model('Mode',{
     nameBrand:{type:String},
     brand:{type:String},
     description:{type:String},
     price:{type:Number},
     imgSrc:{type:String},
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   }),
    DripTip:mongoose.model('DripTip',{
     nameBrand:String,
     price:Number,
     brand:String,
     imgSrc:String,
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   
   }),
    VapeCollection:mongoose.model('VapeCollection',{
     nameBrand:String,
     brand:String,
     price:Number,
     description:String,
     category:String,
     imgSrc:String,
      user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true,
    },
   }) ,
   
   
   }
   