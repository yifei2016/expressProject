const path = require('path');//node function!!!



function resultRender(req, res) {
  let socket = io();
  socket.on('resultFile', (msg) => {
    $('#client').append($('<li>').text(msg));
  })
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
module.exports = {
  resultRender: resultRender
}
