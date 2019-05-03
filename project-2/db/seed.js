// require models 
const coinModel = require("../Models/coinData.js")
const globalModel = require("../Models/globalData.js")
const marketModel = require("../Models/marketData.js")


// require json data
const global = require("../db/globalData.json")
const coin = require("../db/coinData.json")
const market = require("../db/marketData.json")

//remove all existing data from model, and reinsert data from json file
coinModel.remove({});
coinModel.collection
  .insert(coin)
  .then(coin => {
    console.log(coin);
  })
  .catch(err => {
    console.log(err);
  });

globalModel.remove({});
globalModel.collection
  .insert(global)
  .then(global => {
    console.log(global);
  })
  .catch(err => {
    console.log(err);
  });

marketModel.remove({});
marketModel.collection
  .insert(market)
  .then(market => {
    console.log(market);
  })
  .catch(err => {
    console.log(err);
  });
