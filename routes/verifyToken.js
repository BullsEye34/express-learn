const jwt = require('jsonwebtoken');

module.exports=function(req,res,next){
    const token = req.header('Authentication')
    if(!token) return res.status(401).send('Access Denied');

    try{
        const verified=jwt.verify(token, process.env.JWT_SECRET);
        req.user=verified;
    }catch(error){
        res.status(400).json({err:true, message: error})
    }
}