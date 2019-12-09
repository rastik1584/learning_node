module.exports = {
  index: (req, res) => { // Method from route and other
    res.render('index', {
      title: 'úvod',
      headline: 'Moja stranka',
      message: 'x'
    })
  },
  produkty: (req, res) => {
    res.render('produkty', {
      title: 'Produkty',
      headline: 'Produkty'
    })
  },
  contact: (req, res) => {
    res.render('contact', {
      title: 'Kontakt',
      headline: 'Kontakt',
      message: 'Tu by mal byť kontakt ale žiaľ táto informácia nie je publikovateľná'
    })
  }
}