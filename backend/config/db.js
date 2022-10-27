const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://chico:chico123Z@cluster0.cggacou.mongodb.net/vapeit12345?retryWrites=true&w=majority")
.then(()=>console.log('Atlas database connected'))
.catch((err)=>console.log(err))

 
