const { mongoose } = require("mongoose");

const schemFruit= new mongoose.Schema({
   fruit:{
      type:String,
   }, 

});

module.exports = mongoose.model("fruit",schemFruit)