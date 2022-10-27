const express = require('express')
const router=express.Router()
const{saveLiquides,findLiquides,findOneLiquides,updateLiquides,deleteLiquides} =require ('../controllers/liquides.js')



router.get('/getAll',findLiquides)
router.post('/add',saveLiquides)
router.get('/get',findOneLiquides)
router.put('/:id',updateLiquides)
router.delete('/:id',deleteLiquides)
module.exports=router
