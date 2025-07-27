
const lawsData = require("../../database/laws.json");

exports.getAll = (req, res) => {
    res.json(lawsData);
};

exports.getById = (req, res) => {
    const law = lawsData.find(l => l.id == req.params.id);
    if (law) res.json(law);
    else res.status(404).send("Not found");
};
