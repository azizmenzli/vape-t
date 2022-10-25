const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://chico:chico123Z@cluster0.cggacou.mongodb.net/VapeIt?retryWrites=true&w=majority')
.then(()=>console.log('Atlas database connected'))
.catch((err)=>console.log(err))

let atomzierSchema=mongoose.Schema({
    nameBrand:{type:String},
    price:{type:Number},
    brand:{type:String},
    imgSrc:{type:String} 

  
})

let Atomizer=mongoose.model('Atomizer',atomzierSchema)

let liquidesSchema=mongoose.Schema({
    name:{type:String},
    price:{type:Number},
    discription:{type:String},
    imgSrc:{type:String}

})

let Liquides=mongoose.model('Liquides',liquidesSchema)   

let modeSchema=mongoose.Schema({
    nameBrand:{type:String},
    brand:{type:String},
    discription:{type:String},
    price:{type:Number},
    imgSrc:{type:String}
})

let Mode=mongoose.model('Mode',modeSchema)   
