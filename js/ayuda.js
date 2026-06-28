
let botones=document.getElementsByClassName("acordeon");

for(let i=0;i<botones.length;i++){

    botones[i].addEventListener("click",function(){

        let respuesta=this.nextElementSibling;

        if(respuesta.style.display=="block"){
            respuesta.style.display="none";
        }else{
            respuesta.style.display="block";
        }}
    );
}

document.getElementById("consulta").addEventListener("submit",function(e){

    e.preventDefault();
    alert("Su consulta fue enviada correctamente.");
});

document.getElementById("whatsapp").onclick=function(){

    alert("Se abrirá WhatsApp.");
}

document.querySelector(".volver").onclick=function(){

    window.location="inicio.html";
}