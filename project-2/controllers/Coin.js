const coin = require("../Models/coinData.js");

module.exports = {
  index: (req, res) => {
    coin.find({}).then(results => {
      res.json(results);
    });
  },

  showCoinName: (req, res) => {
      let name = req.params.name
    coin.findOne({ "data.coins.name": name }).then(results => {
      res.json(results);
    })
  },

  showCoinSlug: (req, res) => {
  let slug = req.params.slug
    coin.find({ "data.coins.slug": slug}).then(results => {
      res.json(results);
    })
  },

  delete: (res, req) => {
    let name = req.params.name
    coin.findOneAndDelete({ "data.coins.name": name }, req.body).then(results => {
      res.json(results);
    });
  },
  updateName: (res,req) => {
    let name = req.params.name
    coin.findByIdAndUpdate({"data.coins.name":name}, (req.body)).then(results =>{res.json(results)})
  }
};
