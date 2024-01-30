const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: { 
        type: String, 
        required: true,
        trim: true
    },
    password: { 
        type: String, 
        required: true 
    },
    phoneNumber: {
       type:  Number,
       required: true
    },
    email: {
       type: String,
       required: true
    },
    address: {
        type: String,
        trim: true
    },
})

const User = mongoose.model('User', userSchema);

module.exports = User;