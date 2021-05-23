const router = require('express').Router();
const User = require('../models/User');

modules.exports = router;

router.post('/register',(req,res)=>{
    console.log("Register")
    res.json({page:"Register"})
})