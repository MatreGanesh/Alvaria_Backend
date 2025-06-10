const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    ForecastGroup_Description: { type: String, required: true },
    Default: { type: String, required: true },
    Code: { type: String },
    Scenario_Description: { type: String, required: true },
    Forecasting_Basis: { type: String, required: true },
    Staffing_Basis: { type: String, required: true },
    Multi_Channel_Staffing_Basis: { type: String, required: true },
    Fiscal_Calendar: { type: String, required: true },
    Updated_By: { type: String, required: true },
    Updated_On: { type: String, required: true },
});

const ForecastingGroupSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Optional: a name for this forecasting group
    details: [DetailSchema]  // multiple details under each group
});

const ForecastingScenariosSchema = new mongoose.Schema({
    forcastingGroup: [ForecastingGroupSchema]
});

module.exports = mongoose.model('ForecastingScenario', ForecastingScenariosSchema);
