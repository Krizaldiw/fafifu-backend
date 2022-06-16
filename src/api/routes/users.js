var express = require('express');
var router = express.Router();
var bcrypt = require('bcrypt');

/* var User = require('../models/user');

/*POST Register
router.post('/signup', (req, res, next) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if(err){
      return res.status(500).json({
        error: err
      });
    }else{
      var users = new User({
        email: req.body.email,
        password: hash
      }); 
      users
        .save()
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: 'Pengguna telah terdaftar'
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json({
            error: err
          });
        });
    }
  })
}); */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
