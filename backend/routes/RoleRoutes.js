const {Router} = require("express");
const { createRole,getAllRoles, getRoleById, updateRole, deleteRole } = require("../controller/RoleController");

const router = Router();

//POST
router.post("/role", createRole);

//GET
router.get('/roles', getAllRoles);
router.get('/role/:id', getRoleById);

//PUT
router.put('/update-role/:id', updateRole);

//DELETE
router.delete('/role/:id', deleteRole);

module.exports = router;