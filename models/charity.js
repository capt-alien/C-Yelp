// models/charity.js

const mongoose = require('mongoose');

const Charity = mongoose.model('Charity', {
  donation: Number,
  charName: String,
  description: String
});

module.exports = Charity;
