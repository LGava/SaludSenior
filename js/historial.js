
document.getElementById("buscarBtn").onclick=function(){

    let texto=document.getElementById("buscar").value;

    if(texto==""){
        alert("Mostrando todo el historial.");
    }else{
        alert("Buscando: "+texto);
    }
}

let botones=document.querySelectorAll(".consulta button");


for(let i=0;i<botones.length;i++){

    botones[i].onclick=function(){
        alert("Aquí se mostrarán los detalles de la consulta.");
    }       
}

document.querySelector(".descargar").onclick=function(){    
    alert("Historial descargado correctamente.");
}

document.querySelector(".volver").onclick=function(){
    window.location="inicio.html";
}