const Exoplanet = require('./../model');

const getExoplanets = async () => {
    try {
        return await Exoplanet.find({});
    } catch (e) {
        return err;

    }
};

const getExoplanet = async id => {
    try {
        return await Exoplanet.findOne({_id: id});
    } catch (e) {
        return e;
    }
};

module.exports = {getExoplanets, getExoplanet};