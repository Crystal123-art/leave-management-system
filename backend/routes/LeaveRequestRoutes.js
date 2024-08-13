const {Router} = require("express");
const { createLeaveRequest, getAllLeaveRequests, getLeaveRequestById } = require("../controller/LeaveRequestController");

const router = Router();

//POST
router.post("/leave-request", createLeaveRequest);

//GET
router.get('/leave-requests', getAllLeaveRequests);
router.get('/leave-request/:id', getLeaveRequestById);

module.exports = router;