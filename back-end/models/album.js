const mongoose = require('mongoose');

const albumSchema = new mongoose.Schema({
    title: String,
    artist: String,
    genre: String,
    cover: String,
    listened: Boolean,
    liked: Boolean,
})

const Albums = mongoose.model('Album', albumSchema)

module.exports = Albums
