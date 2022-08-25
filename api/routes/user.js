const router = require('express').Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs');
const isPermitted = require('../middleware/Permission')

router.get('/all-end-users', isPermitted, async (req, res) => {
    try {
        const query = req.query.new
        const user = req.user
        if (user.isAdmin) {
            const users = query ? await User.find({}, { password: 0 }).sort({ _id: -1 }).limit(5) : await User.find({}, { password: 0 })
            res.status(200).json({ status: true, users, message: "All user list fetched" })
        } 
        else {
            res.status(403).json({ status: false, message: "You are not authorize to see all users" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//update profile by admin or by owner only
router.put('/update/:id', isPermitted, async (req, res) => {
    try {
        const id = req.params.id
        const user = req.user
        const data = req.body

        if (user.id === id || user.isAdmin) {
            if (data.password) {
                const salt = await bcrypt.genSalt(10)
                const hashedPassword = await bcrypt.hash(password, salt)
                data.password = hashedPassword
            }
            try {
                const updatedUser = await User.findByIdAndUpdate(user.id, {
                    $set: data
                }, { new: true })
                res.status(200).json({ status: true, updatedUser, message: "profile updated successful" })
            } catch (error) {
                res.status(500).json(error.message)
            }
        }
        else {
            res.status(404).json({ status: false, message: 'You are not authorize to take this action' })
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
})

//delete profile by admin or by owner only
router.delete('/delete/:id', isPermitted, async (req, res) => {
    try {
        const id = req.params.id
        const user = req.user

        if (user.id === id || user.isAdmin) {
            try {
                await User.findByIdAndDelete(id)
                res.status(200).json({ status: true, message: "profile delete successful" })
            } catch (error) {
                res.status(500).json(error.message)
            }
        }
        else {
            res.status(404).json({ status: false, message: 'You are not authorize to take this action' })
        }

    } catch (error) {
        res.status(500).json(error.message)
    }
})

//find any profile by user id by anyone
router.get('/findone/:id', isPermitted, async (req, res) => {
    try {
        const id = req.params.id
        // const user = req.user
        try {
            const user = await User.findById(id, { password: 0 })
            res.status(200).json({ status: true, user, message: "profile found" })
        } catch (error) {
            res.status(500).json(error.message)
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router