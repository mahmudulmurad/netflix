const express = require('express')
const router = express.Router();
const authRoute = require("./auth")
const userRouter = require("./user")

router.use("/auth", authRoute)
router.use("/user", userRouter)

module.exports = router