const Role = require('../models/RoleModel');

const createRole = async (req, res) => {
  try {
    const { roleId, roleName } = req.body;

    const role = new Role({
        roleId,
        roleName,
    });

    await role.save();

    res.status(201).json({ message: 'Role created successfully', role });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRole };
