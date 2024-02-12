const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    fullName: String,
    idCompany: String,
    gender: String,
    address: String,
    station: String,
    mobile: String,
    email: String,
    photos: String,
    dateOfBirth: String,
    legalcard: String,
    username: String,
    group: String,
    login: String,
    password:String
});

module.exports = mongoose.model('Employee', employeeSchema);