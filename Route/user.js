const express = require('express');
const route = express.Router();
const userController = require('../Controller/userController');


route.post('/signin', userController.SignIn);
route.post('/signup', userController.signup);



module.exports = route;