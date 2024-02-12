const groupEmployee = require('../../models/groupEmployee/groupEmployeeSchema');


const addNewGroup = async (GroupData) => {
    return await groupEmployee.create(GroupData);

};
const getallGroupEmployee = async () => {
    return await groupEmployee.find();
}
const getGroupEmployeeById = async (id) => {
    return await groupEmployee.findById(id);
}

const getGroupByIdEmployee = async (id_employee) => {
    return await groupEmployee.find(id_employee);
};
const getGroupByIdCompany = async (id_company) => {
    return await groupEmployee.find(id_company);
};

const updateGroupEmployee= async (id, updateData) => {
    return await groupEmployee.findByIdAndUpdate(id, updateData, { new: true });
};

const deleteGroupEmployee = async (id) => {
    return await groupEmployee.findByIdAndDelete(id);
};





module.exports = {getGroupByIdCompany, addNewGroup, getGroupByIdEmployee, getGroupEmployeeById, updateGroupEmployee, deleteGroupEmployee, getallGroupEmployee};