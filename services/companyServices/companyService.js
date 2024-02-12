const companyDao =require("../../dao/companyDao/companyDao");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const createCompany = async (companyData) => {
    console.log(companyData);
   
    const hashedPassword = await bcrypt.hash(companyData.password, 10);
  return await companyDao.createCompany({ ...companyData, password: hashedPassword });
};


const loginCompany = async (login, password) => {
  const company = await companyDao.findCompanyByLogin(login);

  if (!company) {
    throw new Error('company not found');
  }

  if (await bcrypt.compare(password, company.password)) {
    const accessToken = jwt.sign({ company: company.login }, 'yourSecretKey');
    return { accessToken };
  } else {
    throw new Error('Incorrect password');
  }
};

const getCompanyById = async (id) => {
    return await companyDao.getCompanyById(id);
  };
const getCompanies = async () => {
    return await companyDao.getCompanies();
  };
  
  const deleteCompany = async (id) => {
    return await companyDao.deleteCompany(id);
  };
  
  const getCompanyByEmail = async (email) => {
    return await companyDao.getCompanyByEmail(email);
  };

  const updateCompany = async (id, updateData) => {
    return await companyDao.updateCompany(id, updateData);
  };
  const updatePassword = async (id, password) => {
    console.log(password);
    const hashedPassword = await bcrypt.hash(password.password, 10);
    return await companyDao.updatePassword(id, hashedPassword);
  };

 

  module.exports = {createCompany,getCompanyByEmail,getCompanies,deleteCompany,getCompanyById, updateCompany, loginCompany, updatePassword}