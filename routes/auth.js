const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
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
    const salt = await bcrypt.genSalt(1024);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    const user = new User({
        name: req.body.name,
        password: hashPassword,
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
});

router.post('/login',async (req,res)=>{
    // Validate User before Logging User
    const {error} = await loginValidation(req.body);
    if(error) return res.json({err:true,message:error.details[0].message}).status(400);
   
    // Check if user Doesn't Exists
    const userExists = await User.findOne({email: req.body.email});
    if(!userExists) return res.status(400).json({err: true, message: "Email Does NOT Exist"});

    //Check if Password is correct
    const isValidPassword = await bcrypt.compare(req.body.password, userExists.password);
    if(!isValidPassword) return res.status(400).json({err: true, message: "Password is not correct"})

    // Create and Assign Token
    const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET);
    res.header('Authentication', token);
    
})


module.exports = router;