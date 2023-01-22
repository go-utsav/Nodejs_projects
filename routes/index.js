var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pages/home', { layout: 'layout', title: 'Home' });
});

router.get('/about', function(req, res, next) {
  res.render('pages/about', { layout: 'layout', title: 'about' });
});

router.get('/contact', function(req, res, next) {
  res.render('pages/contact', { layout: 'layout', title: 'contact' });
});

router.get('/dhaja', function(req, res, next) {
  res.render('pages/dhaja', { layout: 'layout', title: 'dhaja' });
});

router.get('/donation', function(req, res, next) {
  res.render('pages/donation', { layout: 'layout', title: 'donation' });
});

router.get('/photo', function(req, res, next) {
  res.render('pages/photo', { layout: 'layout', title: 'photo' });
});

router.get('/service', function(req, res, next) {
  res.render('pages/service', { layout: 'layout', title: 'service' });
});

module.exports = router;
