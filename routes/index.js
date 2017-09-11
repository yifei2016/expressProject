var express = require('express');
var router = express.Router();//spread routing
const path = require('path');//node function!!!
const report = require(__dirname + '/report');//require file(module) or built in module, but not in same path, locate it with path.join
const result = require(path.join(__dirname, 'result'));
const handle404 = require(path.join(__dirname, '404'));


router.get('/', function(req, res, next) {
  console.log(path.join(__dirname, '../views/index.html'))//windows \ delimiter
  console.log(path.join(__dirname, '..','views','index.html'))
  //console.log(__dirname + '../views/index.html')
  res.render('index');
});
// app.get('/',function(req,res){
//   res.sendFile('index.html');
// });
router.get('/report', report.reportHandler);
router.post('/report', report.formHandler);//form post method
router.get('/result', result.resultRender);


router.get('*', handle404);

//Wildcard (asterisken) gör att den tar hand om alla requests.
//Förutom att vi renderar en sida skickar vi också en status (404) i responsen för
//att klienten ska kunna agera på rätt sätt.

module.exports = router;
