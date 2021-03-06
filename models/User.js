const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true,
    },
    email:{
        type: String,
        required:true,
    },
    phone:{
        type: Number,
        default:'',
        
    },
    img: {
        type: String,
        default: "https://static.vecteezy.com/system/resources/previews/001/196/558/original/person-png.png",

    },
    date:{
        type: Date,
        default: Date.now,
    }
});


module.exports = mongoose.model('User', userSchema);