const express = require('express');
const country = require("./routes/country");
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({
  path:'./data/config.env'
})

app =express();
module.exports = app;

app.use(express.json())
app.use(cors())

// middleware routes
app.use("/api/v1",country)

app.get('/', (req, res) => {
  res.json({
   status:true,
   country:"Enter '/api/v1/country' to check country name list and its code."
  })
})
