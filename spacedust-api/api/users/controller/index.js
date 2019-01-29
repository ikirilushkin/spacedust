const queries = require('./../query');

const postUser = async (req, res) => {
    try {
        const userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password
        };

        await queries.createUser(userData);
        return res.json({message: "user created"});
    } catch (err) {
        return res.status(400).json({
            message: 'There was a problem creating your account'
        });
    }
};

module.exports = {
    postUser
};
