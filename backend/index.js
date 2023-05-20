const express = require("express")
const cors = require("cors")
const connectToMongoose = require("./connectToDb")


const app = express()
app.use(cors())
app.use(express.json())
connectToMongoose()
const PORT = process.env.PORT || 4000

app.get("/", (req, res) => {
    res.json({Hemloo: "Satyammmm"})
})

app.use("/employes", require("./Routes/emplyes"))
app.use("/auth", require("./Routes/auth"))
app.use("/attendence", require("./Routes/attendance"))


app.listen(PORT, () => {
    console.log(`Server running on pport: ${PORT}`)
})