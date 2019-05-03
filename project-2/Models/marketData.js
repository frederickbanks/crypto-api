const mongoose = require("../db/connection.js")


const marketSchema = new mongoose.Schema({
  data: {
    markets: [
      {
        id: Number,
        rank: Number,
        baseSymbol: String,
        sourceName: String,
        price: Number,
        marketShare: Number
      }
    ]
  }
})

module.exports = mongoose.model("marketSchema", marketSchema)