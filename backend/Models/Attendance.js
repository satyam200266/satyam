const mongoose = require('mongoose')
const { Schema } = mongoose;

const attendanceSchema = new Schema({
    userId : {type: mongoose.Schema.Types.ObjectId, ref: 'employe'},
    status : {type: Number, required: true }, //1 for present, 2 for halfDat and 0 for absenet
    date : {type: String, required: true},
})

const Attendance = mongoose.model("attendence", attendanceSchema);
module.exports = Attendance;