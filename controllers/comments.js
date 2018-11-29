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

  // DELETE
  app.delete('/charities/comments/:id', function (req, res) {
    console.log("DELETE comment")
    Comment.findByIdAndRemove(req.params.id).then((comment) => {
      res.redirect(`/charities/${comment.charity}`);
    }).catch((err) => {
      console.log(err.message);
    })
  })

  // app.delete('/charities/comments/:id', (req, res) => {
  // 	Comment.findByIdAndRemove(req.params.id).then(comment => {
  // 		res.redirect(`/charities/${comment.charity}`)
  // 	})
  // })


}
