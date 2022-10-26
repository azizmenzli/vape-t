const express = require('express')
const router=express.Router()
const{saveAtomizer,findAtomizer} =require ('../controllers/productsControllers.js')



router.get('/:id',findAtomizer)
router.post('/post',saveAtomizer)

module.exports=router
