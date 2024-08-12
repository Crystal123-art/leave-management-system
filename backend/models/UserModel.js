
const mongoose = require('mongoose');
const { GENDER } = require('../constants');

const userSchema = new mongoose.Schema({
  empId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Employee',
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/\S+@\S+\.\S+/, 'is invalid'],
  },
  password: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: Object.values(GENDER),
    required: true,
  },
  roleId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role',
  },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
