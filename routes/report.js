function reportHandler(req,res){
  res.render('report',{
    valueFirst: 'Vasakyrkan',
    valueSecond: 'Masthuggskyrkan',
    valueThird: 'Gårdstenskyrkan',
    valueFour: 'Kortedala',
    party: {
      partyFirst: 'Number of vote',
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
module.exports = reportHandler;
