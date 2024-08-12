const {Router} = require("express");
const { createEmployee } = require("../controller/EmployeeController");

const router = Router();

router.post("/employee", createEmployee);

module.exports = router;
