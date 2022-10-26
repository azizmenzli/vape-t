const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

    .then(console.log(`MongoDB Connected: `))
    .catch ((error)=>console.log(error))
    process.exit(1)

    const userSchema = mongoose.Schema(
      {
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
      }
    )
  

  
    let User=mongoose.model('User',userSchema)


