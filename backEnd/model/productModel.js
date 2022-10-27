 const mongoose=require('mongoose')
module.exports={
    Atomizer:mongoose.model('Atomizer',{
     nameBrand:{type:String},
     price:{type:Number},
     brand:{type:String},
     imgSrc:{type:String} 
   }),
    Liquides:mongoose.model('Liquides',{
     name:{type:String},
     price:{type:Number},
     description:{type:String},
     imgSrc:{type:String}
   
   }),
   
    Mode:mongoose.model('Mode',{
     nameBrand:{type:String},
     brand:{type:String},
     description:{type:String},
     price:{type:Number},
     imgSrc:{type:String}
   }),
    DripTip:mongoose.model('DripTip',{
     nameBrand:String,
     price:Number,
     brand:String,
     imgSrc:String
   
   }),
    VapeCollection1:mongoose.model('VapeCollection',{
     nameBrand:String,
     brand:String,
     price:Number,
     description:String,
     category:String,
     imgSrc:String
   }) ,
    Card:mongoose.model('Card',{
   
   })
   }
   