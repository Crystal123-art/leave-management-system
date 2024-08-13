const User = require('../models/UserModel');

const createUser = async (req, res) => {
    try {
        const { empId, email, password, location, gender, roleId } = req.body;

        const user = new User({
            empId,
            email, 
            password, 
            location, 
            gender, 
            roleId,
        });

        await user.save();

        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all users
const getAllUsers = async (req, res) => {
    try {
      const users = await User.find().populate('empId roleId');
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get user by Id
  const getUserById = async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate('empId roleId');
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createUser, getAllUsers, getUserById };
