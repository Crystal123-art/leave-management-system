const Role = require('../models/RoleModel');

//CREATE role
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

// GET all roles
const getAllRoles = async (req, res) => {
  try {
    const roles = await Role.find();
    res.status(200).json(roles);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET role by ID
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

//UPDATE role
const updateRole = async (req, res) => {
  try {
    const roleId = req.params.id; // Get the role ID from the URL parameters
    const updatedData = req.body; // Get the updated data from the request body

    const updatedRole = await Role.findByIdAndUpdate(roleId, updatedData, { new: true });

    if (!updatedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json({ message: 'Role updated successfully', updatedRole });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

//DELETE role
const deleteRole = async (req, res) => {
  try {
    const RoleId = req.params.id; // Get the employee ID from the URL parameters

    const deletedRole = await Role.findByIdAndDelete(RoleId);

    if (!deletedRole) {
      return res.status(404).json({ message: 'Role not found' });
    }

    res.status(200).json({ message: 'Role deleted successfully', deletedRole });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createRole, getAllRoles, getRoleById, updateRole, deleteRole };

