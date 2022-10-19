const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks')
const food = require('./models/food')

app.get('/drinks/', (req,res) => {
    res.render( 'drinks_index.ejs', {allDrinks: drinks, allFood: food})
})

app.get('/drinks/:id', (req, res) => {
    res.render('drinks_show.ejs', {drinks: drinks[req.params.id]})  
}) 


app.get('/food/:id', (req, res) => {
    res.render('food_show.ejs', {food: food[req.params.id]})  
})






app.listen(port, () => {
    console.log('listening')
})