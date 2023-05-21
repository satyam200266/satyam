const { verifyToken } = require("../middlewares/checkAuth");
const Attendance = require("../Models/Attendance");
const { formateDate } = require("../utils/date");

const route = require("express").Router()

route.post("/add/:userId/:id", verifyToken, async (req, res) => {
    const status = req.params.id;
    const userID = req.params.userId;

    const todayDate = formateDate(Date.now());
    const isAlreadyAttendance = await Attendance.findOne({ userId: userID, date: todayDate });

    if (isAlreadyAttendance) {
        return res.status(409).json({ message: `Attendance has already been marked for this user on ${todayDate}` });
    }

    try {
        const dbRes = await Attendance.create({
            userId: userID,
            status,
            date: todayDate
        });
        res.status(200).json(dbRes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while marking attendance.' });
    }
});

route.get("/:id", async (req, res) => {
    try {
        const dbRes = await Attendance.find({userId: req.params.id})
        res.status(200).json(dbRes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'An error occurred while marking attendance.' });
    }
});


module.exports = route