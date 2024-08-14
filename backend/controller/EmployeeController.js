const Employee = require('../models/EmployeeModel');

//CREATE employee
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

//GET all employee
const getAllEmployees = async (req, res) => {
    try {
      const employees = await Employee.find().populate('teamId');
      res.status(200).json(employees);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

// GET employee by Id
const getEmployeeById = async (req, res) => {
    try {
      const employee = await Employee.findById(req.params.id).populate('teamId'); // findById is only used for finding a document by its _id.
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
      res.status(200).json(employee);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //UPDATE employee
  const updateEmployee = async (req, res) => {
    try {
      const { empId } = req.params;
      const updatedData = req.body;
  
      const updatedEmployee = await Employee.findOneAndUpdate(
        { empId }, // Find the employee by empId
        updatedData,
        { new: true, runValidators: true } // Return the updated document
      );
  
      if (!updatedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.status(200).json({ message: 'Employee updated successfully', updatedEmployee });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //DELETE employee
  const deleteEmployee = async (req, res) => {
    try {
      const employeeId = req.params.id; // Get the employee ID from the URL parameters
  
      const deletedEmployee = await Employee.findByIdAndDelete(employeeId);
  
      if (!deletedEmployee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
  
      res.status(200).json({ message: 'Employee deleted successfully', deletedEmployee });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createEmployee, getAllEmployees, getEmployeeById, updateEmployee, deleteEmployee};
