const {Router} = require("express");
const { createRole } = require("../controller/RoleController");

const router = Router();

router.post("/role", createRole);

module.exports = router;