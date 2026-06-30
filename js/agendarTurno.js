const listaEspecialidades = document.querySelectorAll(".especialidad");
const btnSiguienteEspecialidad = document.querySelector(".btn-siguiente");

let especialidadSeleccionada = false;

listaEspecialidades.forEach(function(especialidad){

    especialidad.addEventListener("click",function(){

        listaEspecialidades.forEach(e=>{
            e.classList.remove("seleccionada");
        });

        this.classList.add("seleccionada");

        const nombre=this.querySelector(".texto").textContent.trim();

        sessionStorage.setItem("especialidad",nombre);

        btnSiguienteEspecialidad.disabled=false;

    });

});

botonSiguiente.addEventListener("click", function () {

    if (!especialidadSeleccionada) {

        alert("Seleccione una especialidad.");

        return;

    }

    window.location.href = "elegirLugar.html";

});