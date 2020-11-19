var express = require('express');
var router = express.Router();


router.get('/managerLogIn', function(req, res, next) {
  res.render('manager/managerLogIn', { title: 'index' });
});


router.get('/managerHome', function(req, res, next) {
  res.render('manager/managerHome', { title: 'index' });
});


router.get('/newManager', function(req, res, next) {
  res.render('manager/addNewManager', { title: 'index' });
});

router.get('/getAllManager', function(req, res, next) {
  res.render('manager/getAllManager', { title: 'index' });
});


router.get('/getAllUser', function(req, res, next) {
  res.render('manager/manageUser', { title: 'index' });
});

router.get('/updateManagerInfo', function(req, res, next) {
  res.render('manager/updateManagerInfo', { title: 'index' });
});


router.get('/viewProduct', function(req, res, next) {
  res.render('manager/viewProduct', { title: 'index' });
});

router.get('/updateProductInfo', function(req, res, next) {
  res.render('manager/updateProductInfo', { title: 'index' });
});


router.get('/addNewProduct', function(req, res, next) {
  res.render('manager/addNewProduct', { title: 'index' });
});


router.get('/getAllTransaction', function(req, res, next) {
  res.render('manager/getAllTransaction', { title: 'index' });
});


router.get('/login', function(req, res, next) {
  res.render('user/userLogin', { title: 'index' });
});


router.get('/register', function(req, res, next) {
  res.render('user/register');
});


router.get('/', function(req, res, next) {
  res.render('user/index');
});


router.get('/cart', function(req, res, next) {
  res.render('user/cart');
});


router.get('/profile', function(req, res, next) {
  res.render('user/profile');
});


router.get('/products', function(req, res, next) {
  res.render('user/products');
});


router.get('/single', function(req, res, next) {
  res.render('user/single');
});

module.exports = router;
