const {Router} = require("express");
const { createLeaveRequest, getAllLeaveRequests, getLeaveRequestById, updateLeaveRequest, deleteLeaveRequest } = require("../controller/LeaveRequestController");

const router = Router();

//POST
router.post("/leave-request", createLeaveRequest);

//GET
router.get('/leave-requests', getAllLeaveRequests);
router.get('/leave-request/:id', getLeaveRequestById);

//PUT
router.put('/update-leave-request/:id', updateLeaveRequest);

//DELETE
router.delete('/leave-request/:id', deleteLeaveRequest);

module.exports = router;