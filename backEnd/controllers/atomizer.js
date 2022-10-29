const {Atomizer}=require('../model/productModel.js')
module.exports={
    saveAtomizer:(req,res)=>{
        let request=req.body
        const newAtomizer= new Atomizer({
            nameBrand: request.nameBrand,
            price: request.price,
            brand: request.brand,
            imgSrc: request.imgSrc
        })
        newAtomizer.save().then((result)=>res.status(200).json(result))
        .catch((err)=> res.send(err.message).status(500))
       
    },
    findAtomizer:(req,res)=>{
        Atomizer.find({},
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results)
        )
    },
    findOneAtomizer:(req,res)=>{
        let request=req.body
        Atomizer.findOne({nameBrand:request.nameBrand},
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    
    },
    deleteAtomizer:(req,res)=>{
        
        Atomizer.findByIdAndDelete(req.params.id,
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    },
    updateAtomizer:(req,res)=>{
        Atomizer.findByIdAndUpdate(req.params.id,req.body,
            (err,results)=>err?res.status(500).console.log(err):res.status(200).send(results))
    }
}