const Employee = require('../models/EmployeeModel');

const createEmployee = async (req, res) => {
    try {
        const { empId, empName, designation, teamId } = req.body;

        const employee = new Employee({
            empId,
            empName,
            designation,
            teamId,
        });

        await employee.save();

        res.status(201).json({ message: 'Employee created successfully', employee });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

//get all employee
const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find().populate('teamId');
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// Get employee by Id
const getEmployeeById = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id).populate('teamId');
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createEmployee, getAllEmployees, getEmployeeById};
