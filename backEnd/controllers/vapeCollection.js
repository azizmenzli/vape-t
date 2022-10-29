const {VapeCollection} =require('../model/productModel')

module.exports={
    saveVape:(req,res)=>{
        let request=req.body
        const newVape=new VapeCollection({
            nameBrand:request.nameBrand,
            price:request.price,
            brand:request.brand,
            description:request.description,
            category:request.category,
            imgSrc:request.imgSrc,
            cart:request.id
        })
        newVape.save().then((results)=>res.status(200).json({res:results,cartId:results.cart}))
        .catch((error)=>res.send(error.message).status(500))
    
    },
    findVape:(req,res)=>{
        VapeCollection.find({},(err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    findOneVape:(req,res)=>{
        let request=req.body
        VapeCollection.findOne({nameBrand:request.nameBrand},
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    deleteVape:(req,res)=>{
        VapeCollection.findByIdAndDelete(req.params.id,
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    updateVape:(req,res)=>{
        VapeCollection.findByIdAndUpdate(req.params.id,req.body,
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    }

}