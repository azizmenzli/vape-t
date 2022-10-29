const express = require('express')
const router=express.Router()
const authMid=require('../middleware/authMiddleware')
const Products = require('../model/productModel')

router.post('/add',  async(req,res)=>{
const {id}=req.body
if(!id) return res.status(400).send('Product id is required');

const product = await Products.findById(id);
if (!product) return res.status(404).send('The product you are looking for is not found');

if (req.user.cart.includes(product._id)) return res.status(400).send('The product is already in your cart');

const user = await User.findByIdAndUpdate(req.user._id, {
    cart: [...req.user.cart, product._id]
}, { new: true, useFindAndModify: false });

return res.send(user)
})


module.exports=router
   