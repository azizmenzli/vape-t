const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://chico:chico123Z@cluster0.cggacou.mongodb.net/vapeit12345?retryWrites=true&w=majority")
.then(()=>console.log('Atlas database connected'))
.catch((err)=>console.log(err))

  
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
  discription:{type:String},
  imgSrc:{type:String}

}),

 Mode:mongoose.model('Mode',{
  nameBrand:{type:String},
  brand:{type:String},
  discription:{type:String},
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
  discription:String,
  category:String,
  imgSrc:String
}) ,
 Card:mongoose.model('Card',{

}),
User:mongoose.model('User', {
        name: {
          type: String,
          required: [true, 'Please add a name'],
        },
        email: {
          type: String,
          required: [true, 'Please add an email'],
          unique: true,
        },
        password: {
          type: String,
          required: [true, 'Please add a password'],
        },
      },
      {
        timestamps: true,
      })
}

