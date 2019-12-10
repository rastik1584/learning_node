const mysql = require('mysql2')

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'blog'
})

con.connect();

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
    const blog = con.query(`select * from posts where id= ${req.params.id}`, (err, rows, fields) => {
      if(err) throw err
      res.render('posts', {
        title: 'Články',
        headline: rows[0].title,
        message: rows[0].full_text
      })
    })
  },
  clanky (req, res) {
    con.query('select * from posts', (err, rows, fields) => {
      if(err) throw err
      res.render('clanky', {
        title: 'Články ',
        headline: 'Zoznam článkov',
        posts: rows
      })
    })
  }
}