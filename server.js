const express = require('express');
const hbs = require('hbs');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

app.get('/', (req, res) =>
  res.render('home.hbs', {
    pageTitle: 'Home'
  })
);

app.get('/about', (req, res) =>
  res.render('about.hbs', {
    pageTitle: 'About'
  })
);

app.get('/products', (req, res) =>
  res.render('products.hbs', {
    pageTitle: 'Products'
  })
);

app.listen(port, () => console.log(`Server is running on port ${port}`));
