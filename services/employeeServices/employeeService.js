const employeeDao =require("../../dao/employeeDao/employeeDao")
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createEmployee = async (employeeData, documents) => {
    console.log(employeeData);
    console.log(documents);
    let saveResult = await saveMediaToServer(documents);
    console.log(saveResult);
    const hashedPassword = await bcrypt.hash(employeeData.password, 10);
  return await employeeDao.createEmployee({ ...employeeData, password: hashedPassword });
};

async function saveMediaToServer(documents) {
  await saveMediaFile(documents[0].base64String, documents[0].name);
  return true;
}

async function saveMediaFile(base64String, fileName) {
  console.log(base64String)
  const base64Data = await base64String.replace(/^data:image\/\w+;base64,/, "");
  const binaryData = Buffer.from(base64Data, "base64");
  const filePath = "files/employeeFiles/" + fileName;
  
  fs.writeFile(filePath, binaryData, "binary", (err) => {
    if (err) {
      console.error("Error saving the file:", err);
    } else {
      console.log("File saved successfully!");
    }
  });
}

const loginEmployee = async (login, password) => {
  const employee = await employeeDao.findEmployeeByLogin(login);

  if (!employee) {
    throw new Error('employee not found');
  }

  if (await bcrypt.compare(password, employee.password)) {
    const accessToken = jwt.sign({ employee: employee.login }, 'yourSecretKey');
    return { accessToken };
  } else {
    throw new Error('Incorrect password');
  }
};

const getEmployeeById = async (id) => {
    return await employeeDao.getEmployeeById(id);
  };
const getEmployees = async () => {
    return await employeeDao.getEmployee();
  };
  
  const deleteEmployee = async (id) => {
    return await employeeDao.deleteEmployee(id);
  };
  
  const getEmployeeByEmail = async (email) => {
    return await employeeDao.getEmployeeByEmail(email);
  };
  const getEmployeeByIdCompany = async (idCompany) => {
    return await employeeDao.getEmployeeByIdCompany(idCompany);
  };

  const updateEmployee = async (id, updateData) => {
    return await employeeDao.updateEmployee(id, updateData);
  };

 

  module.exports = {createEmployee,getEmployeeByEmail,getEmployees,deleteEmployee,getEmployeeById, updateEmployee, loginEmployee, getEmployeeByIdCompany}