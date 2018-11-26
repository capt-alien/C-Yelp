const express = require('express')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/c-yelp');
const bodyParser = require('body-parser');
//ODM
const Charity = mongoose.model('Charity', {
  donation: Number,
  charName: String,
  description: String
});


app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


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


// SHOW <== WTF is wrong with this!!
app.get('/charities/:id', (req, res) => {
  Charity.findById(req.params.id).then((charity) => {
    res.render('charities-show', { charity: charity })
  }).catch((err) => {
    console.log(err.message);
  })
})




app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
