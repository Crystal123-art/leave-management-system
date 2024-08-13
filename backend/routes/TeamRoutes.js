const {Router} = require("express");
const { createTeam, getAllTeams, getTeamById } = require("../controller/TeamController");

const router = Router();

router.post("/team", createTeam);
router.get("/teams", getAllTeams);
router.get("/team/:id", getTeamById);

module.exports = router;
