const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        min: 3,
        max: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role : {
        type: String,
        enum: ['Jobs Seeker', 'Jobs Provider'],
        default: 'Jobs Seeker',
        required: true,
    },
}, {timestamps : true});

const userModel  = new mongoose.model('User', userSchema);

module.exports = userModel;

