const express = require('express')
const router = express.Router()
const mainControl = require('../controllers/MainController')

// define the home page route
router.get('/', mainControl.index) // Define from route use controller method
// define the about route
router.get('/about', mainControl.produkty)

router.get('/kontakt', mainControl.contact)

module.exports = router