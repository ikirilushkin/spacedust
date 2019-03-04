const Exoplanet = require('./../model');

const getExoplanets = async owner => {
    try {
        return await Exoplanet.find({ owner });
    } catch (e) {
        return err;

    }
};

const getExoplanet = async (owner, id) => {
    try {
        return await Exoplanet.findOne({ owner, _id: id });
    } catch (e) {
        return e;
    }
};

const createExoplanet = async (owner, exoplanetData) => {
    try {
        const newExoplanet = new Exoplanet(exoplanetData);
        newExoplanet.owner = owner;
        return await newExoplanet.save();
    } catch (e) {
        return e;
    }
};

const deleteExoplanet = async (owner, id) => {
    try {
        return await Exoplanet.findOneAndRemove({ owner, _id: id});
    } catch (e) {
        return e;
    }
};

module.exports = {getExoplanets, getExoplanet, createExoplanet, deleteExoplanet};