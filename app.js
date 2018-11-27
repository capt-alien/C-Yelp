const express = require('express')
const methodOverride = require('method-override')
const app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/c-yelp');
const bodyParser = require('body-parser');
//ODM
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));



// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const Charities = require('./controllers/charities')(app);

// const Charities = require('./controllers/charities')(app, Charity);


app.listen(3000, () => {
  console.log('App listening on port 3000!')
})
