const Joi = require('joi');


const registerValidation = ()=> {
    const schema = Joi.object({
        name: Joi.string().min(6).max(25).required(),
        email: Joi.string().min(6).email(),
        password: Joi.string().min(6),
    });
    
    

    
}