var express = require('express');
var router = express.Router();


var Product = require('../models/Product.js');


router.get('/', function(req, res, next) {
  Product.find(function (err, doc) {
    if (err) return next(err);
    res.json(doc);
  });
});

router.route('/newproduct').post(function (req, res, next) {
    Product.findOne({productName: req.body.productName}, function (err, doc) {
        if (err) throw err;
        if (doc) { 
            res.json({ Existed: true, Build: false});
        } else {

            Product.create(req.body, function(err, post) {
                if (err) return next(err);
                res.json({ Existed: false, Build: true});
            }) 

        }
    });
});

router.route('/:product_id').get(function (req, res) {
    Product.findById(req.params.product_id, function (err, product) {
        if (err) res.send(err);
        res.json(product);
    });
});


router.post('/update/:id', function(req, res, next) {
  Product.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json({message: 'Update Successfully!'});
  });
});



router.delete('/:productID', function (req, res) {
    Product.remove({ _id: req.params.productID }, function (err) {
        if (err) res.send(err);
        res.json({ Delete: true });
    });
});

router.post('/editinventory', function(req, res, next) {
    Product.findOne({ _id:req.body.product_ID}, function(error, doc){
        if(doc){
            doc.volume += req.body.quantity;
            doc.inventory_amount -= req.body.quantity;
           
                
            doc.save(function(error){
                res.json({ Failed: false, message: 'Quantity updated' });
            })
            
        }else{
            res.json({ Failed: true, message: 'product not found' });   
        }
        
    })
});



module.exports = router;