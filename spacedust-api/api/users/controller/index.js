const queries = require('./../query');
const util = require('./../util');

const postUser = async (req, res) => {
    try {
        const hashedPassword = await util.hashPassword(req.body.password);
        const userData = {
            email: req.body.email,
            username: req.body.username,
            password: hashedPassword
        };

        const user = await queries.createUser(userData);
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
