const {Router} = require("express");
const { createUser, getAllUsers, getUserById } = require("../controller/UserController");

const router = Router();

router.post("/user", createUser);
router.get("/users", getAllUsers);
router.get("/user/:id", getUserById);

module.exports = router;
