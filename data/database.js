const { default: mongoose } = require("mongoose");

const mongodb=()=>{

   mongoose.connect('mongodb://127.0.0.1:27017/',{
      dbName:"myapi",
   })
   .then(()=>{
      console.log("Database connected");
   })
   .catch(()=>{
      console.log("Database connection error ");
   });
    
}
module.exports = mongodb;