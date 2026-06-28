
const botonMarcar = document.getElementById("marcar");
const estados = document.getElementsByClassName("estado");
const nuevas = document.getElementsByClassName("nueva");

botonMarcar.onclick = function(){

    for(let i=0;i<estados.length;i++){

        estados[i].innerHTML="Leida";
    }
    while(nuevas.length>0){

        nuevas[0].classList.remove("nueva");
    }
    alert("Todas las notificaciones fueron marcadas como leídas.");
}

document.querySelector(".volver").onclick=function(){
    window.location="inicio.html";
}