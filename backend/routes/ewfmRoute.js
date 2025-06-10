const express = require('express');
const router = express.Router();
const { addEwfmData,getEwfmData} = require('../controller/ewfmController'); // Adjust the path as necessary

// Define the route for adding schedules
router.post('/addewfm', addEwfmData);
router.post('/getewfmdata', getEwfmData);


module.exports = router;