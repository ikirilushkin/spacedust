const User = require('./../model');

const createUser = async userData => {
    try {
        const newUser = new User(userData);
        return newUser.save();
    } catch (err) {
        return err;
    }

};

module.exports = { createUser };