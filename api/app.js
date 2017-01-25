const express = require('express');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  let json = {} // ensure response in JSON format

  if(err instanceof Error){
    if(req.app.get('env') === 'development'){
      json.stack = err.stack // add stack in development environment
    }
    json.message = err.message
  }
  else if(typeof(err) === 'string'){
    json.message = err // string as the error message
  }
  else if(Object.prototype.toString.call(err) === '[object Object]'){
    json = err // JSON object as response
  }

  res.status(err.status || 500).json(json)
});

module.exports = app;