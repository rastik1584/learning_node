const express = require('express')
const router = express.Router()
const mainControl = require('../controllers/MainController')

// define the home page route
router.get('/', mainControl.index) // Define from route use controller method

router.get('/produkty', mainControl.produkty)

router.get('/clanky', mainControl.clanky)

router.get('/kontakt', mainControl.contact)

router.get('/clanky/:id', mainControl.posts)

module.exports = router