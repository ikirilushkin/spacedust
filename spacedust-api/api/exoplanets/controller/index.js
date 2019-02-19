const queries = require('./../query');

const getExoplanets = async (req, res) => {
    try {
        const exoplanets = await queries.getExoplanets();
        res.json({result: exoplanets});
    } catch (err) {
        return err;
    }
};

const getExoplanet = async (req, res) => {
    try {
        const id = req.params.id;
        const exoplanet = await queries.getExoplanet(id);
        res.json({result: exoplanet});
    } catch (err) {
        return err;
    }
};

module.exports = {getExoplanets, getExoplanet};