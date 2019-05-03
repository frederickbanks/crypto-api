// require axios in file
const axios = require("axios");
// require fs for writing to file
const fs = require("fs");

// create blank array to push newly created ID's into
let ids = [];
// only want to create 10 coins for my models
let coinCount = 10;
// base url that holds coin data
let baseURL = "https://api.coinranking.com/v1/public/stats"

// randomizes market collection
for (let i = 0; i < coinCount; i++) {
  let rand = Math.floor(Math.random() * 10000);
  ids.push(rand);
}

let nums = ids.map(id => `${baseURL}`).map(url => axios.get(url));

Promise.all(nums)
  .then(success => {
    let collectedData = success.map(res => res.data);
    let stringified = JSON.stringify(collectedData);
    fs.writeFile(__dirname + "/getMarketData.json", stringified, "utf8", err => {
      if (err) {
        console.log(err);
      } else {
        console.log(
          `successfully wrote ${
            collectedData.length
          } records to db/getMarketData.json`
        );
      }
    });
  })
  .catch(err => {
    console.log(err);
    console.log("try again in 10 seconds");
  });
