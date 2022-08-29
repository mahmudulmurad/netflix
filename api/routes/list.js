const router = require('express').Router()
const List = require('../models/List')
const isPermitted = require('../middleware/Permission')

//Create new moves
router.post('/create-list', isPermitted, async (req, res) => {
    try {
        const data = req.body
        const user = req.user
        if (user.isAdmin) {
            const newList = new List(data)
            await newList.save()
            res.status(201).json({ status: true, newList, message: "A new list is added" })
        }
        else {
            res.status(403).json({ status: false, message: "You are not authorize" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

module.exports = router