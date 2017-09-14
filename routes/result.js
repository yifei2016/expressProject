const path = require('path');//node function!!!
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

// function resultRender(req, res) {
//   let socket = io();
//   $('form').submit(function(){
//       socket.emit('local', $('#local').val());
//       $('#local').val('');
//       return false;
//   });
//   socket.on('local', (local) => {
//       $('#client').append($('<li>').text(local));
//   })
// };

function resultRender(req,res){
  res.render('resultFile')
}

module.exports = {
  resultRender: resultRender
}


// function resultRender(req, res) {
//   var result = require(path.join(__dirname, 'result.json'))//object
//   console.log(result + '-----------------')
//   res.render(
//     'resultFile', {
//       result: result
//     }
//   )
// }
//render must have filename and object
