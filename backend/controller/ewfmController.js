const Ewfm = require("../model/Ewfm");

const addEwfmData = async (req, res) => {
  try {
    const entries = req.body;

    if (!Array.isArray(entries) || entries.length === 0) {
      return res
        .status(400)
        .json({ message: "Request body must be a non-empty array" });
    }

    const savedEntries = [];

    for (const entry of entries) {
      const { EWFMDdeptCode, EWFMDdeptName, RoutingSet, Cases, Voice } = entry;

      if (!EWFMDdeptCode || !EWFMDdeptName || !RoutingSet || !Cases || !Voice) {
        return res
          .status(400)
          .json({ message: "All fields are required for each entry" });
      }

      const newEntry = new Ewfm({
        EWFMDdeptCode,
        EWFMDdeptName,
        RoutingSet,
        Cases,
        Voice,
      });

      const savedEntry = await newEntry.save();
      savedEntries.push(savedEntry);
    }

    return res.status(201).json(savedEntries);
  } catch (error) {
    console.error("Error adding data:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
const getEwfmData = async (req, res) => {
  try {
    const { routingSet } = req.body;

    if (!routingSet) {
      return res
        .status(400)
        .json({ message: "RoutingSet query parameter is required" });
    }

    const results = await Ewfm.find({ RoutingSet: routingSet });

    if (results.length === 0) {
      return res
        .status(404)
        .json({ message: "No records found for the provided RoutingSet" });
    }

    return res.status(200).json(results);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  addEwfmData,
  getEwfmData,
};
