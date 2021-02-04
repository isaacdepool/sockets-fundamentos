var socket = io();

        // Escuchar

        socket.on('connect', function(){
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function(){
            console.log('Perdimos conexion con el servidor');
        });

        socket.on('enviarMensaje', function(res){

            console.log('Servidor: ', res);
        });

        // Enviar informacion

        socket.emit('enviarMensaje', {
            usuario: 'Isaac',
            message: 'Hola mundo'
        }, function(resp){

            console.log('Respuesta server', resp);
        });