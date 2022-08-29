const router = require('express').Router()
const Movie = require('../models/Movie')
const isPermitted = require('../middleware/Permission')

//Create new moves
router.post('/create-movie', isPermitted, async (req, res) => {
    try {
        const data = req.body
        const user = req.user
        if (user.isAdmin) {
            const newMovie = new Movie(data)
            await newMovie.save()
            res.status(201).json({ status: true, newMovie, message: "A new Movie is added" })
        }
        else {
            res.status(403).json({ status: false, message: "You are not authorize" })
        }
    } catch (error) {
        res.status(500).json(error.message)
    }
})

// update existing movie
router.put('/update-movie/:id', isPermitted, async (req, res) => {
    const id = req.params.id
    const data = req.body
    const user = req.user
    
    if (user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(id, {
                $set: data
            }, { new: true })
            res.status(200).json({ status: true, updatedMovie, message: "Movie updated successful" })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    else {
        res.status(403).json({ status: false, message: "You are not authorize to update movie" })
    }
})

// delete existing movie
router.delete('/delete-movie/:id', isPermitted, async (req, res) => {
    const id = req.params.id
    const user = req.user
    if (user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(id)
            res.status(200).json({ status: true, message: "Movie deleted successful" })
        } catch (error) {
            res.status(500).json(error.message)
        }
    }
    else {
        res.status(403).json({ status: false, message: "You are not authorize to update movie" })
    }
})

// get any movie
router.get('/get-movie/:id', isPermitted, async (req, res) => {
    const id = req.params.id
    try {
        const movie = await Movie.findById(id)
        res.status(200).json({ status: true, movie, message: "Movie fetched successful" })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

//GET RANDOM

router.get("/random", isPermitted, async (req, res) => {
    const type = req.query.type
    let movie
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: { isSeries: true } },
                { $sample: { size: 1 } },
            ]);
        } else {
            movie = await Movie.aggregate([
                { $match: { isSeries: false } },
                { $sample: { size: 1 } },
            ]);
        }
        res.status(200).json({ status: true, movie, message: "Random Movie fetched successful" })
    } catch (err) {
        res.status(500).json(err);
    }
});

//GET ALL
router.get("/all-movies", isPermitted, async (req, res) => {
    const user = req.user
    if (user.isAdmin) {
        try {
            const movies = await Movie.find();
            res.status(200).json(movies.reverse());
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json("You are not allowed!");
    }
});

module.exports = router