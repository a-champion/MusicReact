const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Albums = require('../models/album')

////////////////////////////////
//ROUTES
////////////////////////////////

router.post('/', (req, res) => {
    Albums.create(req.body, (err, createdAlbum) => {
        res.json(createdAlbum)
    })
})

router.get('/', (req, res) => {
    Albums.find({}, (err, foundAlbums) => {
        res.json(foundAlbums)
    })
})

router.put('/:id', (req, res)=> {
    Albums.findByIdAndUpdate(req.params.id, req.body, {new:true}, (err, updatedAlbum) =>{
        res.json(updatedAlbum)
    })
})

module.exports = router;