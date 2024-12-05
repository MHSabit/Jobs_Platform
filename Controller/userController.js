const userSchema = require('../Schema/userSchema');



const user = {};

user.SignIn = (req, res) => {
    res.send('SignIn');
}

user.signup = (req, res) => {
    res.send('signup');
}


user.generateAccessToken = (req, res) => {
    res.send('generateAccessToken');
}

module.exports = user;