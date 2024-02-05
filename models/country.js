const {mongoose} = require('mongoose')

const schema = new mongoose.Schema({
   name:{
      type:String,
   },
   code:{
      type:String,
   }
});

module.exports = mongoose.model("country",schema) 