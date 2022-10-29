const express = require('express')
const router=express.Router()
const{saveAtomizer,findAtomizer,findOneAtomizer,deleteAtomizer,updateAtomizer} =require ('../controllers/atomizer.js')



router.get('/getAll',findAtomizer)
router.get('/get',findOneAtomizer)
router.post('/add',saveAtomizer)
router.delete('/:id',deleteAtomizer)
router.put('/:id',updateAtomizer)





module.exports=router
