const mongoose = require("mongoose")

const EmployeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    number: {type: String, required: true, unique: true},
    joiningDate : {type: String, required: true},
    salary: {type: Number, required: true},
    position: {type: String, required: true},
})


const EmpoyeModel = mongoose.model("employes", EmployeSchema)

module.exports = EmpoyeModel;