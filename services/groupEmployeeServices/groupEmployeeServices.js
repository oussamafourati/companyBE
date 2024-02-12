const groupEmployeeDao = require ("../../dao/groupEmployeeDao/groupEmployeeDao")


const addNewGroup = async (groupData) => {
    console.log(groupData);   
  return await groupEmployeeDao.addNewGroup(groupData);
};

const updateGroupEmployee = async (id, updateData) => {
    return await groupEmployeeDao.updateGroupEmployee(id, updateData);
  };
  
  const getGroupEmployeeById = async (id) => {
    return await groupEmployeeDao.getGroupEmployeeById(id);
  }
  
  const getGroupByIdEmployee = async (id_employee) => {
    return await groupEmployeeDao.getGroupByIdEmployee(id_employee);
  };
  
  const getGroupByIdCompany = async (id_company) => {
    return await groupEmployeeDao.getGroupByIdCompany(id_company);
  };
  const deleteGroupEmployee = async (id) => {
    return await groupEmployeeDao.deleteGroupEmployee(id);
  };
  
 module.exports ={addNewGroup, getGroupEmployeeById, getGroupByIdEmployee, updateGroupEmployee, deleteGroupEmployee, getGroupByIdCompany}