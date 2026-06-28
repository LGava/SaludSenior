
let tamaño=20;

document.getElementById("aumentar").onclick=function(){

    tamaño+=2;
    document.body.style.fontSize=tamaño+"px";
}

document.getElementById("disminuir").onclick=function(){

    if(tamaño>16){

        tamaño-=2;
        document.body.style.fontSize=tamaño+"px";
    }
}

document.getElementById("normal").onclick=function(){

    tamaño=20;
    document.body.style.fontSize="20px";
}

let contraste=false;

document.getElementById("contraste").onclick=function(){

    if(contraste==false){

        document.body.style.background="#000";
        document.body.style.color="#FFF";

        contraste=true;
    }else{

        document.body.style.background="#F5F5F5";
        document.body.style.color="#333";

        contraste=false;
    }
}

document.getElementById("guardar").onclick=function(){
    alert("La configuración fue guardada correctamente.");
}

document.querySelector(".volver").onclick=function(){
    window.location="inicio.html";
}