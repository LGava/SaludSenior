
document.getElementById("agendar").onclick=function(){

    sessionStorage.setItem("proceso", "agendar");
    window.location="especialidad.html";
};

document.getElementById("turnos").onclick=function(){

    window.location="misTurnos.html";
};

document.getElementById("historial").onclick=function(){

    window.location="historial.html";
};

document.getElementById("datos").onclick=function(){

    window.location="misDatos.html";
};

document.getElementById("notificaciones").onclick=function(){

    window.location="notificaciones.html";
};

document.getElementById("ayuda").onclick=function(){

    window.location="ayuda.html";
};

document.getElementById("cerrarSesion").onclick=function(){

    let respuesta=confirm("¿Desea cerrar la sesión?");

    if(respuesta){
        window.location="index.html";
    }
};
