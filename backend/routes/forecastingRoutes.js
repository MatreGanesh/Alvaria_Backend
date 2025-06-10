const express = require('express');
const router = express.Router();
const { getAllForecastingScenarios, createForecastingScenario, deleteScenariosByGroupNames } = require('../controller/forecastingController');

// POST create new forecasting scenario
router.post('/forecasting-scenarios', createForecastingScenario);

// GET all forecasting scenarios
router.get('/forecasting-scenarios', getAllForecastingScenarios);

router.delete('/forecasting-scenarios', deleteScenariosByGroupNames);

module.exports = router;
