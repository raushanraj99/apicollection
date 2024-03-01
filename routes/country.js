const express = require('express');
const { countryName,fruits} = require('../controller/country');

const router = express.Router()

router.get("/country",countryName)

router.get("/fruits",fruits)


module.exports = router;