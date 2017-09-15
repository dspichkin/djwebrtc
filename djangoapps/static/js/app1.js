// Compatibility shim
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;



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
        console.log("$('#remote-video')", $('#remote-video'))
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


function start_app() {
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
    });
    window.peer.on('error', function(err) {
        console.log(err.message);
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


$(document).ready(function() {

    disableCall();
    /*
    window.ws = new WebSocket("wss://127.0.0.1:8000/call");
        window.ws.onopen = function() {
            console.log('CONNECT to WS');

            
        };
        window.ws.onerror = function(error) {
            console.log("Ошибка WS" + error.message);
        };
        
    */

    
    $('#end-call').click(function() {
        if (window.callingCall) {
            window.callingCall.close();
        }
        if (window.answeringCall) {
            window.answeringCall.close();
        }
    });


    $('#make-key').click(function() {
        var key = $('#key').val();
        var serv = $('#server').val();
        if (!key || !serv) {
            return;
        }
        
        start_app();
    });

    $('#make-call').click(function() {

        
        //window.ws.send(JSON.stringify({
        //    type: "CALL"
        //}));

        
        startLocalVideo(function() {
            var call = window.peer.call($('#callto-id').val(), window.localStream);
            prepareCall(call);
        });

    });

    
});

