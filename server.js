const express = require('express')
const app = express()
const port = 3000
const drinks = require('./models/drinks')
const food = require('./models/food')

//you could create a home route that links to each index /drinks /food so that you can separate out the data sets
app.get("/", (req, res) => {
    res.send(`
    Welcome to the Gitpub App!
    <a href='/drinks'>DRINKS</a>
    <a href='/food'>FOOD</a>`)
})
app.get('/drinks/', (req,res) => {
    res.render( 'drinks_index.ejs', {allDrinks: drinks})
})
//i created a new route for food and a new food_index page
app.get('/food', (req, res) => {
    res.render('food_index.ejs', {
        allFood: food
    })
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