const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
    name: String,
    address: String,
    email: String,
    phone: String,
    activity: String,
    service_date: String,
    status: String,
    account_name: String,
    sort_code: String,
    account_number: Number,
    bank_name: String,
    login: String,
    password: String,
});

module.exports = mongoose.model('Company', companySchema);