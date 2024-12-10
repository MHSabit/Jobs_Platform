const UserSchema = require('../Schema/UserSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const userSignupController = {};

userSignupController.signUp = async (req, res) => {
    console.log(req.body);
    try{
        const user = {
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10),
            active: false            
        }
        const existingUser = await UserSchema.findOne({email : user.email});
        if(existingUser) {
            return res.status(400).json({
                message: 'Email ID already associated with a user'
            });
        }
        else {
            const CreateUser = await UserSchema.create(user);
            console.log(CreateUser);
            res.status(200).json({
                message: 'User created successfully',
                user: CreateUser
            });
        }
    }

    catch(err) {
        console.log('error From UserSignup Controller : ', err );
    }

}

module.exports = userSignupController;