const mongoose = require("../db/connection.js");

const coinSchema = new mongoose.Schema({
  data:{
      coins: [
        {
          id: Number,
          slug: String,
          symbol: String,
          name: String,
          description: String,
          iconUrl: String,
          websiteUrl: String,
          socials: [
            {
              name: String,
              url: String,
              type: String
            }
          ],
          history:[]
        }]
      }
    })
    
          

module.exports = mongoose.model("coinSchema", coinSchema);
