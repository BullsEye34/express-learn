const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/User');
const {registerValidation, loginValidation} =require('./validation')

router.post('/register', async (req,res)=>{

    // Validate User before Creating User
    const {error} = await registerValidation(req.body);
    if(error) return res.json({err:true,message:error.details[0].message}).status(400);

    // Check if user already Exists
    const userExists = await User.findOne({email: req.body.email});
    if(userExists) return res.status(400).json({err: true, message: "Email Already Exists"});

    // Hash Password
    const salt = await bcrypt.gentSalt(1024);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


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