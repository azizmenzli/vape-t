const express = require('express')
const router=express.Router()
const {saveVape,findVape,findOneVape,updateVape,deleteVape}=require('../controllers/vapeCollection.js')




router.get('/getAll',findVape)
router.get('/get',findOneVape)
router.post('/add',saveVape)
router.delete('/:id',deleteVape)
router.put('/:id',updateVape)

module.exports=router