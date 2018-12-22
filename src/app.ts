import * as express from 'express';

//var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen('8080')

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.header('Content-Type', 'application/json; charset=utf-8')
  res.status(404);
  var response = {code:9, message:'Not Fonund'}
  res.send(response);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.header('Content-Type', 'application/json; charset=utf-8')
  var response = {code:9, message:'Internal Server Error!'}
  res.send(response);
});

module.exports = app;
