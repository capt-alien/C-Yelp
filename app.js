const express = require('express')
const app = express()

const methodOverride = require('method-override')

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost/c-yelp-eb', {
	useNewUrlParser: true
});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
// override with POST having ?_method=DELETE or ?_method=PUT
app.use(methodOverride('_method'))


// Routes
require('./controllers/charities')(app);
require('./controllers/comments')(app);
// About us Routes// About
app.get('/about', (req, res) => {
  res.render('about', {});
})
// signup page
app.get('/give', (req, res) => {
  res.render('give', {});
})


const port = process.env.PORT || 3000;

app.listen( port, () => {
  console.log('App listening on port 3000!')
})

// export for testing
module.exports = app;
