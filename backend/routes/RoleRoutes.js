const {Router} = require("express");
const { createRole,getAllRoles, getRoleById } = require("../controller/RoleController");

const router = Router();

//POST
router.post("/role", createRole);

//GET
router.get('/roles', getAllRoles);
router.get('/role/:id', getRoleById);

module.exports = router;