var express = require('express');
var path = require('path');
var app = express();
var server = require('http').Server(app);
const io = require('socket.io')(server);
//var pug = require('pug');
var routy = require(path.join(__dirname, 'routes'));
const bodyParser = require('body-parser');
//var repportRouter = require(__dirname + '/routes/repport.js');
//how to get data passed from a form in Express (Node.js)
//Use bodyParser.urlencoded() middleware:  then the form values will be on req.body:


io.on('connection', (socket) => {
    console.log("A user connected");
    // socket.on('disconnect',() => {
    //     console.log("Now disconnected.");
    // });
    // old event 2,
    socket.on('vote', (msg) => {
        io.emit('voted', msg);//new event 1
    });
});

//-socket.on: Used to monitor a launched event by emit,The first parameter is the name of the event to be monitored,
//the second argument
//-is an anonymous function used to receive the data sent by the others,The first argument is the received data

//var favicon = require('serve-favicon');
// var logger = require('morgan');
// var cookieParser = require('cookie-parser');
// var bodyParser = require('body-parser');

// var index = require('./routes/index');
// var users = require('./routes/users');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
//app.set('views', __dirname + '/views')
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', function(req,res){
//   res.sendFile(__dirname + '/views/index.html');
// });

// app.use('/result', function(req,res){
//   res.render(routy)
// });
app.use(bodyParser.urlencoded({ extended: true }));
// routy.post('/vote', function(req,res){
//   io.emit('vote', msg);
//   res.render('resultFile')
// });
app.use('/',routy);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });
server.listen(5000);
//module.exports = app;


//-Servern ska kunna sända ut data till resultat m h a socket.
