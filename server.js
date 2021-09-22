const express = require('express');
const fruits = require('./models/drinks.js');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Welcome to the Gitpub App!');

})

app.listen(port, () => {
    console.log('listening on port', port);
});