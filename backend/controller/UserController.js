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

module.exports = { createUser };
