const express = require('express');
const drinks = require('./models/drinks.js');
const app = express();
const port = 3000;

app.get('/', (req,res) =>{
    res.send('Welcome to the Gitpub App!');

})

// app.get('/drinks',(req,res) =>{
//     res.send(drinks);
// })

app.get('/drinks',(req,res) =>{
    res.render('drinks_index.ejs',{allDrinks:drinks});
});

app.get('/drinks/:id',(req,res) =>{

    let drink = req.params.id
    res.render('drinks_show.ejs',{
            drink: drinks[req.params.id]
    });

});

app.listen(port, () => {
    console.log('listening on port', port);
});