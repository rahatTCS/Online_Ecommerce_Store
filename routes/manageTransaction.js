var express = require('express');
var router = express.Router();


var Transaction = require('../models/Transaction.js');

router.get('/', function(req, res, next) {
  Transaction.find(function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});


router.route('/:userid').get(function (req, res) {
  Transaction.find({ user_ID: req.params.userid }, function (err, doc) {
    if (err) throw err;
    res.json(doc);
    });
});

router.route('/newtransaction').post(function (req, res, next) {
    Transaction.create(req.body, function(err, post) {
    	if (err) return next(err);
    	res.json({ Build: true});
    });
});
    


router.delete('/:id', function(req, res, next) {
  Transaction.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json({ Delete: true});
  });
});


module.exports = router;