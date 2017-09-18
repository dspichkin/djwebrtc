// Compatibility shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;


window.call_src = null;

function startLocalVideo(callback) {
    // Get audio/video stream
    navigator.getUserMedia({
        audio: true,
        video: true
    }, function(stream) {
        $('#local-video').prop('src', URL.createObjectURL(stream));
        window.localStream = stream;
        if (callback) {
            callback();
        }
    }, function(error) {
        console.log("ERROR getUserMedia: ", error);
    });
}

function prepareCall(call) {
    console.log('prepareCall')
    if (window.callingCall) {
        window.callingCall.close();
    }
    window.callingCall = call;

    call.on('stream', function(stream) {
        console.log('stream', stream)
        // get call stream from remote host
        $('#remote-video').prop('src', URL.createObjectURL(stream));
        // turn on local video for answer
        startLocalVideo(function() {
            window.peer.call(call.peer, window.localStream);
        });
    });
    
    call.on('close', function() {
        console.log("CLOSE");
        if (window.callingCall) {
            window.callingCall.close();
        }
        if (window.answeringCall) {
            window.answeringCall.close();
        }

        if (window.localStream) {
            window.localStream.getTracks().forEach(function (track) {
                track.stop();
            });
            window.localStream.src = "";
        }
        if ($('#remote-video')) {
            $('#remote-video').src = "";
        }

        disableCall();
    });
}


function start_app(callback) {
    window.peer = new Peer({
        key: $('#key').val(),
        host: $('#server').val(),
        path: '/peerjs',
        debug: 0,
        secure: true,
        port: 8000
    });


    window.peer.on('open', function(id) {
        console.log('Peer: My peer ID is: ' + id);
        window.localPeerId = id;
        $('#peer-id').val(id);
        enableCall();
        if (callback) {
            callback();
        }
    });
    window.peer.on('error', function(err) {
        console.log(err.message);
        $('#take-call').hide();
        show_clients([]); 
    });

    // Receiving a call
    window.peer.on('call', function(call) {
        console.log('Receiving a call')
        if (call.peer != $('#callto-id').val()) {
            call.answer(window.localStream);
            prepareCall(call);
        
        } else {
            // ответный звонок на вызов
            if (window.answeringCall) {
                window.answeringCall.close();
            }
            window.answeringCall = call;
            call.answer(window.localStream);
            call.on('stream', function(answerstream) {
                // get stream from remote host answer
                $('#remote-video').prop('src', URL.createObjectURL(answerstream));
            });
        }
    });
}

function enableCall() {
    $('#make-call').prop("disabled", false);
    $('#end-call').prop("disabled", false);
}

function disableCall() {
    $('#make-call').prop("disabled", true);
    $('#end-call').prop("disabled", true);
}

function start_call_app(callback) {
    window.ws = new WebSocket('wss://' + $('#server').val() + ":8000/call?key=" + $('#key').val() + "&id=" + $('#peer-id').val());
    window.ws.onopen = function() {
        console.log('CONNECT to WS');
        call_send_command({
            type: "CLIENTS",
            command: "GET"
        });

        run_hearbeat();

    };
    window.ws.onerror = function(error) {
        console.log("Ошибка WS" + error.message);
        show_clients([]);
        $('#take-call').hide();
    };
    window.ws.onmessage = function(event) {
        console.log('onmessage call', event.data);
        var message = JSON.parse(event.data);
        if (message.type == 'CLIENTS') {
            show_clients(message.clients);
        }
        if (message.type == 'CALL' && message.command == 'RING' && message.dst == $('#peer-id').val()) {
            $('#take-call').show();
            window.call_src = message.src;
        }
        if (message.type == 'CALL' && message.command == 'TAKE' && message.dst == $('#peer-id').val()) {
            $('#take-call').hide();
            console.log('run video call')
            run_video_call();
        }
    };

    
}

function call_send_command(command) {
    window.ws.send(JSON.stringify(command));
}

function get_clients() {

    call_send_command({
        type: "CLIENTS",
        command: "GET"
    });
}   

function run_hearbeat() {
    if (window.ws  && window.ws.readyState == 1) {
        //console.log('run_hearbeat')
        call_send_command({
            type: "HEARBEAT",
        });

        setTimeout(function() {
            run_hearbeat();
        }, 10000);
    }
}

function get_key() {
    var key = $('#key').val();
    var serv = $('#server').val();
    if (!key || !serv) {
        return;
    }
    
    start_app(function() {
        start_call_app();
    });
}

function show_clients(clients) {
    ul = $('#users');
    var html = "<ul>";
    for (var i = 0; i < clients.length; i++) {
        html += '<li>' + clients[i].fio + ' ' + clients[i].key + '</li>';
    }
    html += '</ul>';
    $('#users').html(html);
}


function run_video_call() {
     startLocalVideo(function() {
        var call = window.peer.call($('#callto-id').val(), window.localStream);
        prepareCall(call);
    });
}







$(document).ready(function() {

    disableCall();
    

    
    $('#end-call').click(function() {
        if (window.callingCall) {
            window.callingCall.close();
        }
        if (window.answeringCall) {
            window.answeringCall.close();
        }
    });


    $('#make-key').click(function() {
        get_key();
        
    });

    $('#make-call').click(function() {
        
        window.ws.send(JSON.stringify({
            type: "CALL",
            command: "CALL",
            dst: $('#callto-id').val()
        }));
        /*
        
        startLocalVideo(function() {
            var call = window.peer.call($('#callto-id').val(), window.localStream);
            prepareCall(call);
        });
    */
    });

    $('#get-connections').click(function() {
        get_clients();
    });

    $('#take-call').click(function() {
        $('#take-call').hide();
        window.ws.send(JSON.stringify({
            type: "CALL",
            command: 'TAKE',
            dst: window.call_src
        }));
    });

    get_key();
});

