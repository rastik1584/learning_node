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
  }
}