const {Cart}= require ('../model/productModel')
const userSchema =require('../model/userModel')


    let saveCart=(req,res)=>{
        let newCart=new Cart({
            user:req.body.id
        })
        newCart.save().then((results)=>res.status(200).json(results))
        .catch((error)=>res.send(error.message).status(500))
    }
    
module.exports=saveCart