const router = require('express').Router();
const User = require('../models/User');


router.post('/register',(req,res)=>{
    console.log("Register")
    res.json({page:"Register"})
})


module.exports = router;