var express = require('express');
var router = express.Router();


var User = require('../models/User.js');

router.get('/', function(req, res, next) {
  User.find(function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});



router.route('/newuser').post(function (req, res, next) {
    User.findOne({name: req.body.name}, function (err, doc) {
        if (err) throw err;
        if (doc) { 
            res.json({ Existed: true, Build: false});
        } else {

            User.create(req.body, function(err, post) {
                if (err) return next(err);
                res.json({ Existed: false, Build: true});
            }) 

        }
    });
});



router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json({ Delete: true});
  });
});


module.exports = router;