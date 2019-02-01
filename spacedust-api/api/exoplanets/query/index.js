const Exoplanet = require('./../model');

const getExoplanets = async () => {
    try {
        return await Exoplanet.find({});
    } catch (e) {
        return err;

    }
};

module.exports = { getExoplanets };