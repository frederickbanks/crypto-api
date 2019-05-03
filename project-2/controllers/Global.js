const global = require("../Models/globalData.js");

module.exports = {
  index: (req, res) => {
    global.find({}).then(results => {
      res.json(results)
    })
  }}
