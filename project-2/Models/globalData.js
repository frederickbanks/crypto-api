const mongoose = require("../db/connection.js")


const globalSchema = new mongoose.Schema({
  data: [
    {
      totalCoins: Number,
      totalMarkets: Number,
      totalExchanges: Number,
      totalMarketCap: Number,
      total24hVolume: Number
    }
  ]
});

module.exports = mongoose.model("globalSchema", globalSchema)