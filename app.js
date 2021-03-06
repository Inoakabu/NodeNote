// SET DEBUG=NodeNote:* & npm run devstart

var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var dbConfig = require('./config/db_con');

var index = require('./routes/index');
var users = require('./routes/users');
var notes = require('./routes/note');

var noteModel = require('./mongo/models/model');

var app = express();
// get config for DB and connect
mongoose.connect(dbConfig.url,{
  //useMongoClient: true;
});

mongoose.connection.on('error', function(){
  console.log('bad response. Exit ...');
  process.exit();
});

mongoose.connection.once('open',function(){
  console.log("Conn");
});
// get global promise library
mongoose.Promise = global.Promise;
// get default connection
var db = mongoose.connection;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/note', notes);

// bind connection to error event
db.on('error',console.error.bind(console, 'Connection lost:'));
// catch 404 and forward to error handler
app.use(function(req, res, next) {
var err = new Error('Not Found');
  err.status = 404;
  next(err);
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