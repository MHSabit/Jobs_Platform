const express = require('express');
const router = express.Router();

// controller
const SigninController = require('../controller/userSigninController');
const SignupController = require('../controller/userSignupController');

router.get('/', (req, res)=>{
    res.send('USER ROUTE');
});

router.post('/sign-up', SignupController.signUp);
router.post('/sign-in', SigninController.signIn);


module.exports = router;