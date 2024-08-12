const LeaveRequest = require('../models/LeaveRequestModel');

const createLeaveRequest = async (req, res) => {
    try {
        const { reqId, empId, fromDate, toDate, status, reason } = req.body;

        const leaveRequest = new LeaveRequest({
            reqId, 
            empId, 
            fromDate, 
            toDate, 
            status, 
            reason,
        });

        await leaveRequest.save();

        res.status(201).json({ message: 'Leave Request created successfully', leaveRequest });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { createLeaveRequest };
