const Team = require('../models/TeamModel');

const createTeam = async (req, res) => {
  try {
    const { teamId, teamName, lineManager, functionalManager } = req.body;

    const team = new Team({
      teamId,
      teamName,
      lineManager,
      functionalManager,
    });

    await team.save();

    res.status(201).json({ message: 'Team created successfully', team });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTeam };
