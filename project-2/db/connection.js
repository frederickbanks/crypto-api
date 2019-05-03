// require mongoose
const mongoose = require("mongoose");
//set all promises to variable
mongoose.Promise = Promise;
//set live server to variable
const mongoURI = "mongodb://localhost/project-2"


mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(instance =>
    console.log(`connected to db: ${instance.connections[0].name}`)).catch(err => console.log(err)
    )
    if (process.env.NODE_ENV == "production") {
      mongoose.connect(process.env.DB_URL)
    } else {
      mongoose.connect("mongodb://localhost/todo")
    }
    
  module.exports = mongoose