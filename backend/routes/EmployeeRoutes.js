const { Router } = require("express");
const { createEmployee,
        getAllEmployees,
        getEmployeeById,
        updateEmployee } = require("../controller/EmployeeController");

const router = Router();

//POST
router.post("/employee", createEmployee);

//GET
router.get("/employees", getAllEmployees);
router.get("/employee/:id", getEmployeeById);

//PUT
router.put('/update-employee/:empId', updateEmployee);


//DELETE




module.exports = router;
