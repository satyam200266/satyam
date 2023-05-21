const route = require("express").Router()
const Employes = require("../Models/Employes");
const { verifyToken } = require("../middlewares/checkAuth");
const { formateDate } = require("../utils/date");

route.post("/", async (req,res) => {
    const data = req.body;
    try {
        const mongodbRes = await Employes.create(data)
        res.json(mongodbRes)
    } catch (error) {
        if(error.code ===  11000){
            return res.status(409).json({message: `Employe already wxist with same ${Object.keys(error.keyValue)[0]}`})
        }
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
})

route.get("/all", verifyToken ,async (req,res) => {
    const todayDate = formateDate(Date.now())
    try {
        const mongodbRes = await Employes.aggregate([
            {
              $lookup: {
                from: "attendences",
                let: { employeeId: "$_id" },
                pipeline: [
                  {
                    $match: {
                      $expr: {
                        $and: [
                          { $eq: ["$userId", "$$employeeId"] },
                          { $eq: ["$date", todayDate] },
                        ],
                      },
                    },
                  },
                  { $limit: 1 },
                ],
                as: "attendences",
              },
            },
          ]);
        res.json(mongodbRes)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
})

route.get("/" ,async (req,res) => {
    try {
        const mongodbRes = await Employes.find()
        res.json(mongodbRes)
    } catch (error) {
        res.status(500).json({message: "Internal server error"})
        console.log(error)
    }
})

module.exports = route
