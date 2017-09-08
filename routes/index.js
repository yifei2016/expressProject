var express = require('express');
var router = express.Router();//spread routing
const path = require('path');//node function!!!
const reportHandler = require(__dirname + '/report');//require file(module) or built in module, but not in same path, locate it with path.join
const resultHandler = require(path.join(__dirname, 'result'));

router.get('/', function(req, res, next) {
  console.log(path.join(__dirname, '../views/index.html'))//windows \ delimiter
  console.log(path.join(__dirname, '..','views','index.html'))
  //console.log(__dirname + '../views/index.html')
  res.sendFile(path.join(__dirname, '../views/index.html'));
});
// app.get('/',function(req,res){
//   res.sendFile('index.html');
// });

router.get('/result', resultHandler);

router.get('/report', reportHandler);
module.exports = router;
