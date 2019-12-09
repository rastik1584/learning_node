const express = require('express')
const mainRoutes = require('./routes/frontend')

const port = 80
const app = express()

app.use(express.static('public')) // Define from all publics from this folder
app.set('view engine', 'pug') // Set view engine
app.use('/', mainRoutes); // Initialize main routes and set from / url


app.listen(port, () => {
  console.log(`Example app listening on ${port}`)
})
