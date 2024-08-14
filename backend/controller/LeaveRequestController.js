const LeaveRequest = require('../models/LeaveRequestModel');

//CREATE request
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

// GET all requests
const getAllLeaveRequests = async (req, res) => {
    try {
      const leaveRequests = await LeaveRequest.find().populate('empId');
      res.status(200).json(leaveRequests);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
  
  // GET request by ID
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

  //UPDATE leave request
  const updateLeaveRequest = async (req, res) => {
    try {
      const LeaveRequestId = req.params.id; // Get the request ID from the URL parameters
      const updatedData = req.body; // Get the updated data from the request body
  
      const updatedLeaveRequest = await LeaveRequest.findByIdAndUpdate(LeaveRequestId, updatedData, { new: true });
  
      if (!updatedLeaveRequest) {
        return res.status(404).json({ message: 'Request not found' });
      }
  
      res.status(200).json({ message: 'Request updated successfully', updatedLeaveRequest });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  //DELETE request
  const deleteLeaveRequest = async (req, res) => {
    try {
      const LeaveRequestId = req.params.id; // Get the employee ID from the URL parameters
  
      const deletedLeaveRequest  = await LeaveRequest.findByIdAndDelete(LeaveRequestId);
  
      if (!deletedLeaveRequest ) {
        return res.status(404).json({ message: 'Request not found' });
      }
  
      res.status(200).json({ message: 'Request deleted successfully', deletedLeaveRequest  });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

module.exports = { createLeaveRequest, getAllLeaveRequests, getLeaveRequestById, updateLeaveRequest, deleteLeaveRequest };
