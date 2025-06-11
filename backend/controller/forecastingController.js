const ForecastingScenario = require('../model/ForecastingScenario');


// POST a new forecasting group scenarios
const createForecastingGroup = async (req, res) => {
    try {
        const { name, groups } = req.body;

        if (!name || !groups || !Array.isArray(groups)) {
            return res.status(400).json({ message: 'Invalid payload. Provide "name" and an array of "groups".' });
        }

        const newGroup = new ForecastingScenario({ name, groups });

        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);
    } catch (error) {
        console.error('Error creating forecasting group:', error);
        res.status(500).json({ message: 'Error creating forecasting group', error: error.message });
    }
};

// Controller to GET all forecasting scenarios
const getAllForecastingScenarios = async (req, res) => {
    try {
        const scenarios = await ForecastingScenario.find();

        if (!scenarios || scenarios.length === 0) {
            return res.status(404).json({ message: "No forecasting scenarios found." });
        }

        res.status(200).json({
            success: true,
            count: scenarios.length,
            data: scenarios,
        });
    } catch (error) {
        console.error("Error fetching forecasting scenarios:", error.message);
        res.status(500).json({
            success: false,
            message: 'Server error while fetching forecasting scenarios.',
        });
    }
};


// DELETE a forecasting scenario by 'name'
const deleteForecastingScenarioByName = async (req, res) => {
    const { name } = req.params;

    try {
        const result = await ForecastingScenario.deleteOne({ name });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: `No document found with name: ${name}` });
        }

        res.status(200).json({
            message: `Forecasting scenario "${name}" deleted successfully`,
            deletedCount: result.deletedCount
        });
    } catch (error) {
        console.error('Error deleting scenario by name:', error);
        res.status(500).json({ message: 'Failed to delete scenario', error: error.message });
    }
};






module.exports = {
    createForecastingGroup, getAllForecastingScenarios, deleteForecastingScenarioByName
};
