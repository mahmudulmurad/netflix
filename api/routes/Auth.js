const router = require('express').Router()
const User = require('../models/User')
const CryptoJS = require("crypto-js");

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body
    const newUser = new User({
        username: username,
        email: email,
        password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
    })
    try {
        const user = await newUser.save()
        res.status(201).json({status: true, user, message: 'Registration successful'})
    } catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = router;