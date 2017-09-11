
var result = {};
function resultRender(req, res) {
  console.log('result1' + req.body.local)
  
  res.render(
    'resultFile',{
       local: result.body.local,
       party: result.body.party
    }
  )
}

module.exports = {
  resultRender: resultRender
}
