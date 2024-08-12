const {Router} = require("express");
const { createEmployee, getAllEmployees, getEmployeeById } = require("../controller/EmployeeController");

const router = Router();

//post
router.post("/employee", createEmployee);
//get
router.get("/employees", getAllEmployees);
router.get("/employee/:id", getEmployeeById);




module.exports = router;
