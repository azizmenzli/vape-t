const express = require('express')
const router=express.Router()
const{saveMode,findMode,findOneMode,updateMode,deleteMode} =require ('../controllers/mode.js')



router.get('/getAll',findMode)
router.post('/add',saveMode)
router.get('/get',findOneMode)
router.put('/:id',updateMode)
router.delete('/:id',deleteMode)
module.exports=router
