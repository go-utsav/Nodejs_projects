var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var expressLayouts = require('express-ejs-layouts');  

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const staticpath = path.join(__dirname,'../jmd-public-site/public'); 
console.log(staticpath);

var partialpath = path.join(__dirname,('./views/partials'))
console.log(partialpath);

var app = express();
// view engine setup

app.use(expressLayouts);
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(express.static(staticpath));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.engine('ejs', require('ejs').renderFile);
app.set('view engine', 'ejs');


app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.set('view engine', 'ejs');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
