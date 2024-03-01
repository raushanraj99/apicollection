const country = require('../models/country')
const fruitname = require('../models/fruit')


const countryName = async (req,res)=>{
   const countryname = await country.find();
   res.json({
      status:true,
      name:countryname ,
   }).status(200)
}


const fruits = async (req,res)=>{
   const fruit = await fruitname.find();
   res.json({
      status:True,
      fruitlist:fruit
   })
}


 
module.exports = {
   countryName,fruits
}