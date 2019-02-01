const queries = require('./../query');

const getExoplanets = async (req, res) => {
    try {
        const exoplanets = await queries.getExoplanets();
        res.json({ result: exoplanets });
    } catch (err) {
        return err;
    }
};

module.exports = { getExoplanets };