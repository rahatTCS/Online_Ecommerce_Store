var express = require('express');
var router = express.Router();


var Manager = require('../models/Manager.js');

router.route('/login').post(function (req, res) {
	Manager.findOne({ name: req.body.name }, function (err, doc) {
		if (err) throw err;
		if (!doc) {
          res.json({ Failed: true, message: 'username not found' });
        } else {
            if (doc.password != req.body.password) {
                res.json({ Failed: true, message: 'username and password do not match ' });
            } else {
				res.json({ Failed: false, Manager: doc });
            }

        }
    });
});

router.route('/newrole').post(function (req, res, next) {
    Manager.findOne({name: req.body.name}, function (err, doc) {
        if (err) throw err;
        if (doc) { 
            res.json({ Failed: true, message: 'the name already exists'});
        } else {

            Manager.create(req.body, function(err, post) {
                if (err) return next(err);
                res.json({ Failed: false, Build: true});
            }) 

        }
    });
});


router.get('/', function(req, res, next) {
  Manager.find(function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});


router.route('/:manager_id').get(function (req, res) {
    Manager.findById(req.params.manager_id, function (err, manager) {
        if (err) res.send(err);
        res.json(manager);
    });
});

router.post('/:id', function(req, res, next) {
  Manager.findByIdAndUpdate(req.params.id, req.body, function (err, doc) {
    if (err) return next(err);
    res.json({message: 'Information successfully updated'});
  });
});

module.exports = router;