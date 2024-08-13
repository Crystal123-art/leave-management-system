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

// Get all requests
const getAllLeaveRequests = async (req, res) => {
    try {
      const leaveRequests = await LeaveRequest.find().populate('empId');
      res.status(200).json(leaveRequests);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // Get request by ID
  const getLeaveRequestById = async (req, res) => {
    try {
      const leaveRequest = await LeaveRequest.findById(req.params.id).populate('empId');
      if (!leaveRequest) {
        return res.status(404).json({ message: 'Leave request not found' });
      }
      res.status(200).json(leaveRequest);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createLeaveRequest, getAllLeaveRequests, getLeaveRequestById };
