const {Router} = require("express");
const { createUser } = require("../controller/UserController");

const router = Router();

router.post("/user", createUser);

module.exports = router;
