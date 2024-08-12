const {Router} = require("express");
const { createLeaveRequest } = require("../controller/LeaveRequestController");

const router = Router();

router.post("/leave-request", createLeaveRequest);

module.exports = router;