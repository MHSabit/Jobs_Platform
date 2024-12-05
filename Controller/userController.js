const user = {};

user.SignIn = (req, res) => {
    res.send('SignIn');
}

user.signup = (req, res) => {
    res.send('signup');
}

module.exports = user;