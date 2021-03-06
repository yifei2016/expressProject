//-Requests som inte matchar någon av de två första sidorna ska fångas upp av 404.
//- /*Det ska finnas en 404-sida.
//- Ni behöver inte på något sätt tänka på säkerhet,
//- login eller liknande. Allt sådant utelämnar vi och koncentrerar oss på att
//- få data att röra sig fram och tillbaka mellan klient och server.*/
function handle404(req, res){
  res.status(404).render('404', {
    title: '404 - not found'
  })
}

module.exports = handle404;
