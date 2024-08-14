const {Router} = require("express");
const { createTeam, getAllTeams, getTeamById, updateTeam, deleteTeam } = require("../controller/TeamController");

const router = Router();

//POST
router.post("/team", createTeam);

//GET
router.get("/teams", getAllTeams);
router.get("/team/:id", getTeamById);

//PUT
router.put("/update-team/:id", updateTeam);

//DELETE
router.delete("/team/:id", deleteTeam);


module.exports = router;
