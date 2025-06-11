const express = require('express');
const router = express.Router();
const { createForecastingGroup, getAllForecastingScenarios, deleteForecastingScenarioByName } = require('../controller/forecastingController');

// POST create new forecasting scenario
router.post('/forecasting-scenarios', createForecastingGroup);

// GET all forecasting scenarios
router.get('/forecasting-scenarios', getAllForecastingScenarios);

router.delete('/forecasting-scenarios/:name', deleteForecastingScenarioByName);

module.exports = router;
