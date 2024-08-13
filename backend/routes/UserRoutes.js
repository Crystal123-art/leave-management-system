const {Router} = require("express");
const { createUser, getAllUsers, getUserById, updateUser } = require("../controller/UserController");

const router = Router();

//POST
router.post("/user", createUser);

//GET
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);

//PUT
router.put('/update-user/:id', updateUser);

module.exports = router;
