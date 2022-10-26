const {Atomizer} = require('../model/productModel.js')


module.exports={
    saveAtomizer:(req,res)=>{
        const newAtomizer= new Atomizer({
            nameBrand:req.body.nameBrand,
            price:req.body.price,
            brand:req.body.brand,
            imgSrc:req.body.imgSrc
        })
        console.log(newAtomizer)
        newAtomizer.save().then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=> res.send(err.message).status(500))
       
    },
    findAtomizer:(req,res)=>{
        Atomizer.find({nameBrand:req.body.nameBrand},
            (err,results)=>{
            err?console.log(err):res.send(results)
        })
    
    },
    
    
}


