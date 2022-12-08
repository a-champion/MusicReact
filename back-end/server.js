const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();


//////////////////////////
//MIDDLE WARE
////////////////////////
app.use(express.json())
app.use(cors())

app.use(express.static('public'))

//////////////////////////
//CONTROLLERS
////////////////////////
const albumsController = require('./controllers/album')
app.use('/albums', albumsController)


///////////////////////////
//ROUTES
///////////////////////////
app.get('/', (req, res) => {
    res.send('Hello World!');
})


/////////////////////////
//LISTENERS
/////////////////////////
app.listen(3000, () => {
    console.log('listening...')
})

mongoose.connect('mongodb://localhost:27017/albums')
mongoose.connection.once('open', ()=> {
    console.log('connected to mongod...');
})