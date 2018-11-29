// comment.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const Comment = mongoose.model('Comment', {
  amount: Number,
  content: String,
  charity: { type: Schema.Types.ObjectId, ref: 'Charity' }
});

module.exports = Comment
