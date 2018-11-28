const express = require('express')
const methodOverride = require('method-override')
const app = express()
var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/c-yelp-eb');
const bodyParser = require('body-parser');

//ODM
app.use(methodOverride('_method'))
app.use(bodyParser.urlencoded({ extended: true }));

// app.js
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

const Charities = require('./controllers/charities')(app);

// export for testing
module.exports = app;

const port = process.env.PORT || 3000;

app.listen( port, () => {
  console.log('App listening on port 3000!')
})
