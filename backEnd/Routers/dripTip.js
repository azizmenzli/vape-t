const express = require('express')
const router=express.Router()
const {saveDripTip,findDripTip,findOneDripTip,updateDripTip,deleteDripTip}=require('../controllers/dripTip.js')




router.get('/getAll',findDripTip)
router.get('/get',findOneDripTip)
router.post('/add',saveDripTip)
router.delete('/:id',deleteDripTip)
router.put('/:id',updateDripTip)

module.exports=router