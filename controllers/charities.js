//Charities.js
const Charity = require('../models/charity');

module.exports = function(app) {

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

// EDIT
app.get('/charities/:id/edit', (req, res) => {
  Charity.findById(req.params.id, function(err, charity) {
    res.render('charities-edit', {charity: charity});
  })
})

// UPDATE
app.put('/charities/:id', (req, res) => {
  Charity.findByIdAndUpdate(req.params.id, req.body)
    .then(charity => {
      res.redirect(`/charities/${charity._id}`)
    })
    .catch(err => {
      console.log(err.message)
    })
})

// DELETE
app.delete('/charities/:id', function (req, res) {
  console.log("DELETE charity")
  Charity.findByIdAndRemove(req.params.id).then((charity) => {
    res.redirect('/');
  }).catch((err) => {
    console.log(err.message);
  })
})

}
