function recibir_usuario(nombre,planeta,edad,estatura,callback){
    setTimeout(function(){
        let usuario={
            nombre:nombre,
            planeta:planeta,
            edad:edad,
            estatura:estatura
        }
        callback(usuario)
    },10000)
}

recibir_usuario("Arthur","yavin4",17,"174,1",function(usuario){
        if (usuario.edad>=15) {
            console.log("el Padawan "+usuario.nombre+" tinene "+usuario.edad+" años"+": Manejo del sable de luz");
        }
        else{
            console.log("el Padawan "+usuario.nombre+" tinene "+usuario.edad+" años"+": Manejo de la fuerza");
        }
}) 