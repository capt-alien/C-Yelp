// comments.js
//Charities.js
const Comment = require('../models/comment');


module.exports = (app) => {

  // CREATE Comment
  app.post('/charities/comments', (req, res) => {
    Comment.create(req.body).then(comment => {
      res.redirect(`/charities/${comment.charity}`);
    }).catch((err) => {
      console.log(err);
    });
  });





}
