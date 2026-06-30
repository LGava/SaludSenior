const formulario = document.getElementById("formCancelar");

formulario?.addEventListener("submit", cancelarTurno);

function cancelarTurno(e){

    e.preventDefault();

    const opcion = document.querySelector("input[name='motivo']:checked");

    if(!opcion){
        alert("Seleccione un motivo.");
        return;
    }

    const confirmar = confirm("¿Está seguro que desea cancelar el turno?");

    if(confirmar){

        // aquí podrías guardar motivo si quieres:
        sessionStorage.setItem("motivoCancelacion", opcion.value);

        window.location.href = "turnoCancelado.html";
    }
}


// volver
document.getElementById("volver")?.addEventListener("click", () => {
    window.location.href = "misTurnos.html";
});