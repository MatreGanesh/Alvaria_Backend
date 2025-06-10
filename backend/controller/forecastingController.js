const ForecastingScenario = require('../model/ForecastingScenario');

// POST create new ForecastingScenario
const createForecastingScenario = async (req, res) => {
    try {
        const newScenario = new ForecastingScenario(req.body); // assume body matches schema

        const savedScenario = await newScenario.save();
        res.status(201).json(savedScenario);
    } catch (error) {
        console.error(error);
        res.status(400).json({ message: 'Error creating forecasting scenario', error: error.message });
    }
};


// GET all forecasting scenarios
const getAllForecastingScenarios = async (req, res) => {
    try {
        const scenarios = await ForecastingScenario.find();
        res.status(200).json(scenarios);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error fetching forecasting scenarios' });
    }
};

// DELETE a forecastingGroup by name
const deleteScenariosByGroupNames = async (req, res) => {
    let { names } = req.body;

    // Normalize input: if a single name is provided as string, convert to array
    if (!names) {
        return res.status(400).json({ message: 'Please provide a "names" field with group name(s)' });
    }

    if (typeof names === 'string') {
        names = [names]; // Convert single name to array
    }

    if (!Array.isArray(names)) {
        return res.status(400).json({ message: '"names" must be a string or an array of strings' });
    }

    try {
        const result = await ForecastingScenario.deleteMany({
            'forcastingGroup.name': { $in: names }
        });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No matching groups found to delete' });
        }

        res.status(200).json({
            message: `${result.deletedCount} ${names} ForecastingScenario document(s) deleted successfully`,
            result
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error during deletion', error: error.message });
    }
};


module.exports = {
    createForecastingScenario, getAllForecastingScenarios, deleteScenariosByGroupNames
};
