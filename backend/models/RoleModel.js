
const mongoose = require('mongoose');
const { ROLES } = require('../constants');

const roleSchema = new mongoose.Schema({
    roleId: {
        type: String,
        required: true,
        unique: true,
    },
    roleName: {
        type: String,
        enum: Object.values(ROLES),
        required: true,
    },
});

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;
