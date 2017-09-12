const path = require('path');//node function!!!

function resultRender(req, res) {
  var result = require(path.join(__dirname, 'result.json'))//object
  console.log(result + '-----------------')
  res.render(
    'resultFile', {
      result: result
    }
  )
}
//render must have filename and object
module.exports = {
  resultRender: resultRender
}
