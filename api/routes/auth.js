const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

router.post("/register", async (req, res) => {
    const { username, email, password } = req.body

    const user = await User.findOne({ email: email }).exec()
    if (user) {
        return res.status(404).json({
            status: false,
            message: "Email is already being used"
        })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const newUser = new User({
        username: username,
        email: email,
        password: hashedPassword
    })
    try {
        const user = await newUser.save()
        res.status(201).json({ status: true, user, message: 'Registration successful' })
    } catch (err) {
        res.status(500).json(err.message)
    }
})

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email: email }).exec()
        if (!user) {
            return res.status(404).json({
                status: false,
                message: "Invalid email address"
            })
        }
        const comPassword = await bcrypt.compare(password, user.password)
        if (!comPassword) {
            return res.status(404).json({
                status: false,
                message: "Invalid password"
            })
        }
        const payload = { id: user._id, isAdmin: user.isAdmin, email, username: user.username }

        const token = await jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '5d' })

        res.status(200).json({ status: true, user, token, message: 'Login successful' })

    } catch (err) {
        res.status(500).json(err.message)
    }
})

module.exports = router;