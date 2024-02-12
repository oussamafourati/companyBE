const express = require('express');
const groupEmployeeController = require("../../controllers/groupEmployeController/groupEmployeeController")

const router = express.Router();

router.post('/addNewGroup', groupEmployeeController.addNewGroup);
router.get("/deleteGroup/:id",groupEmployeeController.deleteGroupEmployee)
router.get("/getGroupByIdCompany",groupEmployeeController.getGroupByIdCompany)
router.get("/getGroupEmployeeById/:id",groupEmployeeController.getGroupEmployeeById)
router.put("/updateGroupById/:id",groupEmployeeController.updateGroupEmployee)

module.exports = router;