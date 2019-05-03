const market = require("../Models/marketData.js");

module.exports = {
  index: (req, res) => {
    market.find({}).then(results => {
      res.json(results)
    })
  },

  getBaseSymbol: (req, res) => {
      let baseSymbol = req.params.baseSymbol
    market.findOne({"data.market.baseSymbol":baseSymbol}).then(results => {
      res.json(results);
    });
  },

  getMarketName: (req, res) =>
    market.findOne({ "data.market.sourceName": req.params.description }).then(results => {
      res.json(results);
    }),
}
