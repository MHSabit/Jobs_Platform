const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isActive : {
        type: Boolean,
        default: false
    },
    todos : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Todo',
    }]
});

const UserModel = new mongoose.model('user', UserSchema);

module.exports = UserModel;