const Team = require('../models/TeamModel');

//CREATE team
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

// GET all teams
const getAllTeams = async (req, res) => {
  try {
    const teams = await Team.find();
    res.status(200).json(teams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET team by Id
const getTeamById = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) {
      return res.status(404).json({ message: 'Team not found' });
    }
    res.status(200).json(team);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTeam = async (req, res) => {
  try {
    const TeamId = req.params.id; // Get the Team ID from the URL parameters
    const updatedData = req.body; // Get the updated data from the request body

    const updatedTeam = await Team.findByIdAndUpdate(TeamId, updatedData, { new: true });

    if (!updatedTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }

    res.status(200).json({ message: 'Team updated successfully', updatedTeam });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//DELETE team
const deleteTeam= async (req, res) => {
  try {
    const TeamId = req.params.id; // Get the team ID from the URL parameters

    const deletedTeam = await Team.findByIdAndDelete(TeamId);

    if (!deletedTeam) {
      return res.status(404).json({ message: 'Team not found' });
    }

    res.status(200).json({ message: 'Team deleted successfully', deletedTeam });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createTeam, getAllTeams, getTeamById, updateTeam, deleteTeam };
