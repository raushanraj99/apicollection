const { default: mongoose } = require("mongoose");

const mongodb=()=>{

   mongoose.connect(process.env.mongo_URI,{
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