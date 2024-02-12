const mongoose = require('mongoose');

const groupEmployeeSchema = new mongoose.Schema({
    groupName: String,
    startPoint: String,
    dateStart: String,
    timeStart: String,
    Destination: String,
    dateEnd: String,
    timeEnd: String,
    status: String,
    id_company: String,
});

module.exports = mongoose.model('groupEmployee', groupEmployeeSchema);