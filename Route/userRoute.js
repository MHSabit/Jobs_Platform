const express = require('express');
const route = express.Router();
const userController = require('../Controller/userController');


route.post('/sign-in', userController.SignIn);
route.post('/sign-up', userController.signup);
route.post('/generate-access-token', userController.generateAccessToken);

module.exports = route;