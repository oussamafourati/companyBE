const groupEmployeeService = require ("../../services/groupEmployeeServices/groupEmployeeServices")


const addNewGroup = async (req, res) => {
    try {
      const {
        groupName,
    startPoint,
    dateStart,
    timeStart,
    Destination,
    dateEnd,
    timeEnd,
    status,
    id_company,
      } = req.body;
  
     const group = await groupEmployeeService.addNewGroup({
        groupName,
        startPoint,
        dateStart,
        timeStart,
        Destination,
        dateEnd,
        timeEnd,
        status,
        id_company,
      });
      res.json(group);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };

  const updateGroupEmployee = async (req, res) => {
    try {
      const {
        groupName,
    startPoint,
    dateStart,
    timeStart,
    Destination,
    dateEnd,
    timeEnd,
    status,
    id_company,
      } = req.body;
  
     const updatedgroup = await groupEmployeeService.updateGroupEmployee({
        groupName,
        startPoint,
        dateStart,
        timeStart,
        Destination,
        dateEnd,
        timeEnd,
        status,
        id_company,
      });
      res.json(updatedgroup);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  
  const getGroupEmployeeById = async (req, res) => {
    try {
      const GroupEmployeeId = req.params.id;
  
      const getGroupEmployeeId = await employeeAttendanceService.getGroupEmployeeById(GroupEmployeeId);
  
      if (!getGroupEmployeeId) {
        return res.status(404).send('Group Employee not found');
      }
      res.json(getGroupEmployeeId);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
  
  
  
  const getGroupByIdCompany = async (req, res) => {
    try {
      const id_company = req.body;
  
      const getGroupByIdCompany = await groupEmployeeService.getGroupByIdCompany(id_company);
  
      if (!getGroupByIdCompany) {
        return res.status(404).send('Group Employee not found');
      }
      res.json(getGroupByIdCompany);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
  const deleteGroupEmployee = async (req, res) => {
    try {
      const groupEmployeeId = req.params.id;
  
      const deletedGroupEmployee = await groupEmployeeService.deleteGroupEmployee(groupEmployeeId);
  
      if (!deletedGroupEmployee) {
        return res.status(404).send('Group Employee not found');
      }
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.status(500).send(error.message);
    }
  };
  
 module.exports ={addNewGroup, getGroupEmployeeById, updateGroupEmployee, deleteGroupEmployee, getGroupByIdCompany}