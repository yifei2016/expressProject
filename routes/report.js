const path = require('path');
var fs = require('fs');

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

function formHandler(req,res){
  var result = require(path.join(__dirname, 'result.json'))//read file
//当vote request来了。
//先从file里把result string读出来，然后转换成js object 然后用js 加1。 然后再转换成json string 然后再写到file里。
  // var result = {
  //   local: 'dfsdf'
  // }
  // res.send(JSON.stringify(result))//after stringify, object become json
  if(result[req.body.local] ){
    result[req.body.local]++
  }else{
     result[req.body.local] = 1
  }
//add property to result
  fs.writeFileSync(path.join(__dirname, 'result.json'), JSON.stringify(result))
  //to solve async problem, otherwise it is equal to writeFile
  res.render('report', {
    local: req.body.local,
    party: req.body.party,
    vote: req.body.vote
  })
  // res.render('resultFile', {
  //  result: result
  // })
}
//resultFile will use result variable, so render result value to resultFile

module.exports = {
  reportHandler: reportHandler,
  formHandler: formHandler
}
