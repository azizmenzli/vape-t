const express = require('express')
const router=express.Router()
const{saveAtomizer,findAtomizer} =require ('../controllers/productsControllers.js')



router.get('/getAll',findAtomizer)
router.post('/add',saveAtomizer)

module.exports=router
