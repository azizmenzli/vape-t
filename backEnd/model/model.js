
    const VapeCollection=mongoose.model('VapeCollection',{
        nameBrand:String,
        brand:String,
        price:Number,
        discription:String,
        category:String,
        imgSrc:String
    }) 
    const DripTip=mongoose.model('DripTip',{
        nameBrand:String,
        price:Number,
        brand:String,
        imgSrc:String

    })

    VapeCollection.insertMany([
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},
        { nameBrand:"",brand:"",price:000,discription:"",category:"",imgSrc:""},

        
    ]).then(function(){
        console.log("Data inserted")  // Success
    }).catch(function(error){
        console.log(error)      // Failure
    });
      