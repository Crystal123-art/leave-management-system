
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    required: true,
    unique: true,
  },
  empName: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
    required: true,
  },

});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
