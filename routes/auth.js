const router = require('express').Router();
const User = require('../models/User');


router.post('/register', async (req,res)=>{
    const user = new User({
        name: req.body.name,
        password: req.body.password,
        phone: req.body.phone,
        img: req.body.img,
        email: req.body.email
    });
    try{
        const newUser = await user.save();
        res.json({created: newUser});

    }catch(err){
        res.json({
            err: true,
            message: err
        }).status(400);
    }
    res.json({page:"Register"})
})


module.exports = router;