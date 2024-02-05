const express = require('express');
const { countryName} = require('../controller/country');

const router = express.Router()

router.get("/country",countryName)


module.exports = router;