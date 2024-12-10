const userSigninController = {};
const bcrypt = require('bcrypt');
const UserSchema = require('../Schema/UserSchema');
const SiginUtility = require('./UtilityFunctions/signinUtility');

userSigninController.signIn = async (req, res) => {
    const user = await UserSchema.findOne({email : req.body.email});
    console.log(user);
    if(!user)
    {
        return res.status(400).json({
            message: 'User not found'
        });
    }
    const passwordMatch =  await bcrypt.compare(req.body.password, user.password);
    if(!passwordMatch){
        return res.status(400).json({
            message: 'Invalid password'
        });
    }
    const refreshToken = SiginUtility.generateRefreshToken(user);
    const accessToken = SiginUtility.generateAccessToken(user);
    return res.status(200).json({
        message: 'User signed in successfully',
        refreshToken: refreshToken,
        accessToken: accessToken,
        user: user
    });
};


userSigninController.generateAccessToken = async (req, res) => {
    const refreshToken = req.body.refreshToken;
    if(!refreshToken){
        return res.status(400).json({
            message: 'Refresh token is required'
        });
    }
    else{
        const verifyRefreshToken = SiginUtility.verifyRefreshToken(refreshToken);
        console.log('verifyRefreshToken', verifyRefreshToken);
        const user = {
            id: verifyRefreshToken.id,
            name: verifyRefreshToken.name,
            email: verifyRefreshToken.email
        }
        const generateAccessToken = SiginUtility.generateAccessToken(user);
        const generateRefreshToken = SiginUtility.generateRefreshToken(user);

        res.status(200).json({
            message: 'Access token generated successfully',
            accessToken: generateAccessToken,
            refreshToken: generateRefreshToken
        });
    }
};


module.exports = userSigninController;