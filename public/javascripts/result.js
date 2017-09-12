$(function () {
            let socket = io();
            $('form').submit(function(){
                socket.emit('local', $('#local').val());
                $('#local').val('');
                return false;
            });
            socket.on('local', (local) => {
                $('#results').append($('<li>').text(local));
            })
        });
