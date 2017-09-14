$(function () {
  let socket = io();
//new event 2
  socket.on('voted', (msg) => {
   
    $('#client').append($('<tr>')
    .append($('<td>').text(`${msg.local}`))
    .append($('<td>').text(`${msg.party}`))
    .append($('<td>').text(`${msg.voteNumber}`))
  );
})
})
