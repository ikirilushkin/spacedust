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

const createExoplanet = async exoplanetData => {
    try {
        const newExoplanet = new Exoplanet(exoplanetData);
        return await newExoplanet.save();
    } catch (e) {
        return e;
    }
};

const deleteExoplanet = async id => {
    try {
        return await Exoplanet.findOneAndRemove({_id: id});
    } catch (e) {
        return e;
    }
};

module.exports = {getExoplanets, getExoplanet, createExoplanet, deleteExoplanet};