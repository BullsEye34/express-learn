const jwt = require('jsonwebtoken');

function authVerifier(req,res,next){
    const token = req.header('Authentication')
    if(!token) return res.status(401).send('Access Denies');

    try{
        const verified=jwt.verify(token, process.env.JWT_SECRET);
        req.user=verified;
    }catch(error){

    }
}