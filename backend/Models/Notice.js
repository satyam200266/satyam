const mongoose = require('mongoose')
const { Schema } = mongoose;

const noticeSchema = new Schema({
    title : {type: String, required: true},
},{timestamps: true})

const Notice = mongoose.model("notice", noticeSchema);
module.exports = Notice;