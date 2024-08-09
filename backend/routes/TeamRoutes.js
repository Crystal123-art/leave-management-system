const {Router} = require("express");
const { createTeam } = require("../controller/TeamController");

const router = Router();

router.post("/team", createTeam);

module.exports = router;
