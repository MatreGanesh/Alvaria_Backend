const mongoose = require('mongoose');

const DetailSchema = new mongoose.Schema({
    ForecastGroup_Description: { type: String, required: true },
    Default: { type: Boolean, required: true }, // Consider boolean for checkmark logic
    Code: { type: String },
    Scenario_Description: { type: String, required: true },
    Forecasting_Basis: { type: String, required: true },
    Staffing_Basis: { type: String, required: true },
    Multi_Channel_Staffing_Basis: { type: String, required: true },
    Fiscal_Calendar: { type: String, required: true },
    Updated_By: { type: String, required: true },
    Updated_On: { type: String, required: true }, // Consider Date if you're doing sorting
}, { _id: true });

const ForecastingGroupSchema = new mongoose.Schema({
    name: { type: String, required: true }, // e.g., "TWAL.GEMMIRD.DGQXXX_(1)"
    groups: [DetailSchema]
});


module.exports = mongoose.model('ForecastingScenario', ForecastingGroupSchema);
