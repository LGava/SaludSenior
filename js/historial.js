//========================
// BUSCADOR
//========================

const botonBuscar = document.getElementById("buscarBtn");

botonBuscar.addEventListener("click", function () {

    const texto = document.getElementById("buscar").value.trim();

    if (texto === "") {

        alert("Mostrando todo el historial.");

    } else {

        alert("Buscando: " + texto);

    }

});

//========================
// VER DETALLE
//========================

document.querySelectorAll(".consulta button").forEach(function (boton) {

    boton.addEventListener("click", function () {

        const consulta = this.closest(".consulta");

        const especialidad = consulta.querySelector("h2").textContent.trim();

        alert("Mostrando detalles de la consulta de " + especialidad + ".");

    });

});

//========================
// DESCARGAR
//========================

document.querySelector(".descargar").addEventListener("click", function () {

    alert("El historial médico se descargó correctamente.");

});

//========================
// VOLVER
//========================

document.querySelector(".volver").addEventListener("click", function () {

    window.location.href = "inicio.html";

});