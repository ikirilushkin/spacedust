const jwt = require('jsonwebtoken');

const createToken = (user) => {
    return jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email
        }, process.env.JWT_SECRET,
        {
            algorithm: 'HS256',
            expiresIn: '1h'
        });
};

module.exports = {createToken};
