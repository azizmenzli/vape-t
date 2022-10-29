const {DripTip} = require('../model/productModel.js')

module.exports={
    saveDripTip:(req,res)=>{
        let request=req.body
        const newDripTip=new DripTip({
            nameBrand:request.nameBrand,
            price:request.price,
            brand:request.brand,
            imgSrc:request.imgSrc,
        })
        newDripTip.save().then((results)=>res.status(200).json(results))
        .catch((error)=>res.send(error.message).status(500))
    
    },
    findDripTip:(req,res)=>{
        
        DripTip.find({},(err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    findOneDripTip:(req,res)=>{
        let request=req.body
        DripTip.findOne({nameBrand:request.nameBrand},
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    deleteDripTip:(req,res)=>{
        DripTip.findByIdAndDelete(req.params.id,
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    updateDripTip:(req,res)=>{
        DripTip.findByIdAndUpdate(req.params.id,req.body,
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    }

}





