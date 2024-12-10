const jwt = require('jsonwebtoken');
const SiginUtility = {};

SiginUtility.generateRefreshToken = (user) =>{
    if(!process.env.JWT_REFRESH_TOKEN_SECRET){
        throw new Error('JWT_REFRESH_TOKEN_SECRET is not defined in environment variables');
    }
    const userPayload = {
        name : user.name,
        email : user.email
    }
    const refreshToken = jwt.sign(
        { 
            id: user._id,
            name: user.name,
            email: user.email 
        },
        process.env.JWT_REFRESH_TOKEN_SECRET,
    );
    console.log(refreshToken);
    return refreshToken;
}


SiginUtility.generateAccessToken = (user) => {
    if (!process.env.JWT_ACCESS_TOKEN_SECRET) {
        throw new Error('JWT_ACCESS_TOKEN_SECRET is not defined in environment variables');
    }

    return jwt.sign(
        { 
            id: user._id,
            name: user.name,
            email: user.email 
        },
        process.env.JWT_ACCESS_TOKEN_SECRET,
        { expiresIn: '15m' }
    );
};

SiginUtility.verifyRefreshToken = (token) => {
    if (!process.env.JWT_REFRESH_TOKEN_SECRET) {
        throw new Error('JWT_REFRESH_TOKEN_SECRET is not defined in environment variables');
    }
    return jwt.verify(token, process.env.JWT_REFRESH_TOKEN_SECRET, { algorithms: ['HS256'] });
};


module.exports = SiginUtility;