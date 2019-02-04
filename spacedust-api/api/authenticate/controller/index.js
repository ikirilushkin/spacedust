const { getUser } = require('./../../users/query');
const { verifyPassword } = require('./../../users/util');

const postAuthenticate = async (req, res) => {
    try {
        const usernameOrEmail = req.body.usernameOrEmail;
        const password = req.body.password;
        const user = await getUser(usernameOrEmail);
        if (user) {
            const passwordValid = await verifyPassword(password, user.password);
            if (passwordValid) {
                req.session.user = req.session.user = {
                    email: user.email,
                    username: user.username
                };
                req.session.isAuthenticated = true;
                res.json({ message: 'Authentication successful!' });
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