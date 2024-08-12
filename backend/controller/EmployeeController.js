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

module.exports = { createEmployee };
