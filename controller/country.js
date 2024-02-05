const country = require('../models/country')


const countryName = async (req,res)=>{
   const countryname = await country.find();
   res.json({
      status:true,
      name:countryname ,
   }).status(200)
}

 
module.exports = {
   countryName
}