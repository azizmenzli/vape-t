const {Mode} = require('../model/productModel.js')

module.exports={
    
    saveMode:(req,res)=>{
        const newMode= new Mode({
            nameBrand:req.body.nameBrand,
     brand:req.body.brand,
     description:req.body.description,
     price:req.body.price,
     imgSrc:req.body.imgSrc
        })
        console.log(newMode)
        newMode.save().then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=> res.send(err.message).status(500))
       
    },
    findOneMode:(req,res)=>{
        Mode.find({name:req.body.name},(err,results)=>{
            err?console.log(err):res.send(results)

        })
    },
    findMode:(req,res)=>{
        Mode.find({},(err,results)=>{
            err?console.log(err):res.send(results)
        })
    },
    updateMode:(req,res)=>{
        Mode.findByIdAndUpdate(req.params.id,req.body,(err,results)=>{
            err?console.log(err):res.send(results)
        })
    },
    deleteMode:(req,res)=>{
        Mode.findByIdAndDelete(req.params.id,(err,results)=>{
            err?console.log(err):res.send(results)
        })
    }

    
    
}