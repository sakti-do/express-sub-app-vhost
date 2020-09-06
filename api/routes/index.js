const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'API service'})
});

router.get('/test', function(req, res, next) {
  res.json({message: 'test'})
});

router.get('/yoo', function(req, res, next) {
  res.json({message: 'Yoo'})
});

router.use(function (req, res) {
  console.error('404 in main app')
  res.status(404).send('Not Found')
});

module.exports = router;
