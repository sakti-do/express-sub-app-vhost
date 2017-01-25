const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.json({message: 'API service'})
});

router.get('/test', function(req, res, next) {
  res.json({message: 'test'})
});

module.exports = router;
