
const mongoose = require('mongoose')


const userSchema = new mongoose.Schema(
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
    cart: [{
      type: mongoose.Types.ObjectId,
      ref: 'Product',
  }]
  },
  {
    timestamps: true,
  },
  
)
let user=mongoose.model('User', userSchema)

module.exports = {user,userSchema}
