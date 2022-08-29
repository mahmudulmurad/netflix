const express = require('express')
const router = express.Router();
const authRoute = require("./auth")
const userRouter = require("./user")
const movieRouter = require("./movie")
const listRouter = require("./list")

router.use("/auth", authRoute)
router.use("/user", userRouter)
router.use("/movie", movieRouter)
router.use("/list", listRouter)

module.exports = router