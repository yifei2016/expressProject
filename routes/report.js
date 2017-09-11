function reportHandler(req,res){
  console.log('reporthandler')
  res.render('report',{
    valueFirst: 'Vasakyrkan',
    valueSecond: 'Masthuggskyrkan',
    valueThird: 'Gårdstenskyrkan',
    valueFour: 'Kortedala',
    party: {
      partyFirst: 'SPI Seniorpartiet',
      partySecond: 'Arbetarepartiet - Socialdemokraterna',
      partyThird: 'Borgerligt alternativ',
      partyFive: 'Centerpartiet',
      partySix: 'Fria liberaler i Svenska kyrkan FiSK',
      partySeven: 'ÖPPEN KYRKA -- en kyrka för alla',
      partyEight: 'FRIMODIG KYRKA',
      partyNine: 'Kristdemokrater i Svenska kyrkan',
      partyTen: 'Miljöpartister i Svenska kyrkan'
    }
  });
}
var result = {};
function formHandler(req,res){
  console.log('local: ' + req.body.local)
  console.log('party: ' + req.body.party)
  // var result = {
  //   local: 'dfsdf'
  // }
  // res.send(JSON.stringify(result))//after stringify, object become json
  res.render(
    'report', {
      local: req.body.local,
      party: req.body.party
    }
  )
  if(req.body.local){
    result[req.body.local]++
  }

  result[req.body.local] = 1
  console.log('result' + JSON.stringify(result))

}
module.exports = {
  reportHandler: reportHandler,
  formHandler: formHandler
}
