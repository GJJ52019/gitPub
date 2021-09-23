const express = require('express');
const drinks = require('./models/drinks.js');
const foods = require('./models/foods.js')
const app = express();
const port = 3000;

//standard welcome
app.get('/', (req,res) =>{
    const template = `    
<html>
    <head>
    <style type="text/css">
        body {
          color: steelblue;
          background-color: blanchedalmond;
        }
      </style>
    </head>
    <body>
        <h1>Welcome to the Gitpub App!</h1>
         <h2>Please look through our menus</h2>
         <p><a href="/drinks">Drink Menu</a></p>
         <p><a href="/foods">Food Menu</a></p>
    </body>
</html>
`
    res.send(template);

})

//====================================
//drinks
app.get('/drinks',(req,res) =>{
    res.render('drinks_index.ejs',{allDrinks:drinks});
});

app.get('/drinks/:id',(req,res) =>{

    let drink = req.params.id
    res.render('drinks_show.ejs',{
            drink: drinks[req.params.id]
    });

});
//========================================
//foods

app.get('/foods',(req,res) =>{
    res.render('foods_index.ejs',{allFoods:foods});
});

app.get('/foods/:id',(req,res) =>{

    let food = req.params.id
    res.render('foods_show.ejs',{
            food: foods[req.params.id]
    });

});

//============================================
//listening
app.listen(port, () => {
    console.log('listening on port', port);
});