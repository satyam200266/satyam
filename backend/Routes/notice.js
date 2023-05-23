const Notice = require("../Models/Notice")

const route = require("express").Router()

route.post("/", async (req, res) => {
    try {
        await Notice.deleteMany()
        if(!req.body.title) return res.status(200).json({message: "Notice Deleted Successfully!!"})
        const ress = await Notice.create(req.body)
        res.status(200).json(ress)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})

route.get("/", async (req, res) => {
    try {
        const ress = await Notice.findOne()
        res.status(200).json(ress)
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal Server Error"})
    }
})


module.exports = route