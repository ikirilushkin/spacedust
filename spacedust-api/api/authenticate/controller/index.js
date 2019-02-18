const { getUser } = require('./../../users/query');
const { verifyPassword } = require('./../../users/util');
const util = require('./../util');

const postAuthenticate = async (req, res) => {
    try {
        const usernameOrEmail = req.body.usernameOrEmail;
        const password = req.body.password;
        const user = await getUser(usernameOrEmail);
        if (user) {
            const passwordValid = await verifyPassword(password, user.password);
            if (passwordValid) {
                // session implementation
                // req.session.user = req.session.user = {
                //     email: user.email,
                //     username: user.username
                // };
                // req.session.isAuthenticated = true;

                // token implementation
                const token = util.createToken(user);
                console.log(token);
                res.json({ message: 'Authentication successful!', token });
            } else {
                res.status(403).json({ message: 'Wrong username, email, or password.' });
            }
        } else {
            res.status(403).json({ message: 'Wrong username, email, or password.' });
        }

    } catch (err) {
        return err;
    }
};

module.exports = { postAuthenticate };