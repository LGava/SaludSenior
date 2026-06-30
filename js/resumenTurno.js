document.addEventListener("DOMContentLoaded", () => {

    const medico = sessionStorage.getItem("medico");
    const especialidad = sessionStorage.getItem("especialidad");
    const hospital = sessionStorage.getItem("hospital");
    const fecha = sessionStorage.getItem("fecha");
    const hora = sessionStorage.getItem("hora");
    const lugar = sessionStorage.getItem("lugar");

    if (medico) document.getElementById("medico").textContent = medico;
    if (especialidad) document.getElementById("especialidad").textContent = especialidad;
    if (hospital) document.getElementById("hospital").textContent = hospital;
    if (hospital) document.getElementById("hospital2").textContent = hospital;
    if (fecha) document.getElementById("fecha").textContent = fecha;
    if (hora) document.getElementById("hora").textContent = hora;
    if (lugar) document.getElementById("lugar").textContent = lugar;

});