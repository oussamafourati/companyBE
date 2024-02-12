const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const companyRoutes= require ("./routes/companyRoutes/companyRoutes")
const employeeRoutes= require ("./routes/employeeRoutes/employeeRoutes")
const employeeAttendanceRoutes= require("./routes/employeeAttendanceRoutes/employeeAttendanceRoute")
const studentAttendanceRoutes= require("./routes/studentAttendanceRoutes/studentAttendanceRoute")
const groupEmployeeRoutes= require("./routes/groupCompanyRoutes/groupCompanyRoutes")
dotenv.config();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {})
    .then(() => console.log("MongoDB connected!"))
    .catch(err => console.log(err));





    //routes
app.use("/employees",employeeRoutes)
app.use("/companies",companyRoutes)
app.use("/employeeAttendance",employeeAttendanceRoutes)
app.use("/studentAttendance",studentAttendanceRoutes)
app.use("/groupEmployee",groupEmployeeRoutes)

app.listen(8800, () => {
    console.log("Backend server is running!");
});