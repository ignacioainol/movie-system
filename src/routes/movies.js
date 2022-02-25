const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

router.get('/:id', async (req,res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        res.status(200).send(movie);
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});

router.get('/', async (req,res) => {
    try {
        const movies = await Movie.find();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});

router.post('/',async (req,res) => {
    try {

        const {name, releaseDate, genre} = req.body;
        

        const newMovie = new Movie({name, releaseDate, genre});
        await newMovie.save();
        res.status(201).send(newMovie);


    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});

router.put('/:id', async (req,res) => {
    try {
       const {name, releaseDate, genre} = req.body;
       await Movie.findByIdAndUpdate(req.params.id, {name, releaseDate, genre});
       res.status(200).send({msg: `La película con id ${req.params.id}, ha sido actualizada con éxito.`});
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});


router.delete('/:id', async(req,res) => {
    try {
        const deletedMovie = await Movie.findByIdAndDelete(req.params.id);
        res.status(200).send(deletedMovie);
    } catch (error) {
        res.status(500).send({msg: error.message});
    }
});

module.exports = router;
