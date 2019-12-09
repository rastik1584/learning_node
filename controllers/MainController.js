const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
})

connection.connect();

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
  },
  posts: (req, res) => {
    const blog = connection.query(`select * from posts where id= ${req.params.id}`, (err, rows, fields) => {
      if(err) throw err
      res.render('posts', {
        title: 'Články',
        headline: rows[0].title
      })
    })
  }
}