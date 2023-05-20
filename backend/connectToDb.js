const mongoose = require("mongoose")

const connectToMongoose = async () => {
    mongoose.connect("mongodb+srv://satyamHacker:satyamHacker@satyampro.jgz7drr.mongodb.net/?retryWrites=true&w=majority").then(() => {
        console.log("Connected to db");
    }).catch(e => {
        console.log(e)
        console.log("Failed to connect to db")
    })
}


module.exports = connectToMongoose