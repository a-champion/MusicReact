const express = require('express');
const app = express();

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