const express = require('express');
const country = require("./routes/country");
const app =express();

module.exports = app;


app.use(express.json())

// middleware routes
app.use("/api/v1",country)

app.get('/', (req, res) => {
  res.json({
   status:true,
   country:"Enter '/api/v1/country' to check country name list and its code."
  })
})