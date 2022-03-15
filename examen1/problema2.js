function almacenar(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,callback){
    let planos=Array(p1,p2,p3,p4,p5,p6,p7,p8,p9,p10)
    callback(planos)
}
almacenar(10,4,7,10,14,17,40,41,44,47,function(planos){
    planos.forEach(function(planos)
    {if (planos<=10) {
        console.log("reporte de mision: Han & Chewbacca mision robar planos de las estrella de la muerte; planos verdaderos han sido recuperados la rebelion a ganado mision cumplida");
    }
    else{
        console.log("reporte de mision: Han & Chewbacca mision robar planos de las estrella de la muerte; planos falsos han sido recuperados el imperio a ganado mision fallida");
    }
    })
}) 