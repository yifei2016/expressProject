//frontend code
$(function () {
  let socket = io();
  $('form').submit(function(){
    var msg = {
      local: $("#local").val(),
      party: $("#party").val(),
      voteNumber: $("#voteNumber").val()
    }
    socket.emit('vote', msg);//by frontend to send event to backend by emit , old event 1
    });
 });
