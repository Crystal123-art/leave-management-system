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

// Get all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single role by ID
const getRoleById = async (req, res) => {
  try {
    const role = await Role.findById(req.params.id);
    if (!role) {
      return res.status(404).json({ message: 'Role not found' });
    }
    res.status(200).json(role);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRole, getAllRoles, getRoleById };

