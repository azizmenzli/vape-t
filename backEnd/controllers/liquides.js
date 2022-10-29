const {Liquides} = require('../model/productModel.js')

module.exports={
    
    saveLiquides:(req,res)=>{
        const newLiquides= new Liquides({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            imgSrc:req.body.imgSrc
        })
        console.log(newLiquides)
        newLiquides.save().then((result)=>{
            res.status(200).json(result)
        })
        .catch((err)=> res.send(err.message).status(500))
       
    },
    findOneLiquides:(req,res)=>{
        Liquides.find({name:req.body.name},(err,results)=>{
            err?console.log(err):res.send(results)

        })
    },
    findLiquides:(req,res)=>{
        Liquides.find({},(err,results)=>{
            err?console.log(err):res.send(results)
        })
    },
    updateLiquides:(req,res)=>{
        Liquides.findByIdAndUpdate(req.params.id,req.body,(err,results)=>{
            err?console.log(err):res.send(results)
        })
    },
    deleteLiquides:(req,res)=>{
        Liquides.findByIdAndDelete(req.params.id,(err,results)=>{
            err?console.log(err):res.send(results)
        })
    }

    
    
}


