const mongoose = require('mongoose')

const conn = mongoose.connect("mongodb+srv://chico:chico123Z@cluster0.cggacou.mongodb.net/vapeit12345?retryWrites=true&w=majority")
//.then(()=>console.log('Atlas database connected'))
.then(()=>console.log(`Compass MongoDB Connected`))
.catch((err)=>console.log(err))

module.exports=conn