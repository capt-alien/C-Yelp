const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/c-yelp');
const bodyParser = require('body-parser');
//ODM
const Charity = mongoose.model('Charity', {
  gift: Number,
  charName: String,
  description: String

});


app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// OUR MOCK ARRAY OF PROJECTS
// let charities = [
//   { gift: "Great Review", CharName: "Batman II" },
//   { gift: "Awesome Movie", CharName: "Titanic" }
// ]





// INDEX
app.get('/', (req, res) => {
  Charity.find()
    .then(charities => {
      res.render('charities-index', { charities: charities });
    })
    .catch(err => {
      console.log(err);
    })
})

// NEW
app.get('/charities/new', (req, res) => {
  res.render('charities-new', {});
})

// CREATE
app.post('/charities', (req, res) => {
  Charity.create(req.body).then((charity) => {
    console.log(charity);
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
})
})


app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
