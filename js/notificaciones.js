//-----------------------------------------
// BOTONES
//-----------------------------------------

const botonTodas = document.getElementById("todas");
const botonLeidas = document.getElementById("leidas");
const botonNoLeidas = document.getElementById("noleidas");
const botonMarcar = document.getElementById("marcar");
const botonVolver = document.querySelector(".volver");

const notificaciones = document.querySelectorAll(".notificacion");

//-----------------------------------------
// MOSTRAR TODAS
//-----------------------------------------

botonTodas.onclick = function () {

    notificaciones.forEach(function (notificacion) {

        notificacion.style.display = "block";

    });

};

//-----------------------------------------
// MOSTRAR LEÍDAS
//-----------------------------------------

botonLeidas.onclick = function () {

    notificaciones.forEach(function (notificacion) {

        let estado = notificacion.querySelector(".estado").textContent;

        if (estado == "Leída") {

            notificacion.style.display = "block";

        } else {

            notificacion.style.display = "none";

        }

    });

};

//-----------------------------------------
// MOSTRAR NO LEÍDAS
//-----------------------------------------

botonNoLeidas.onclick = function () {

    notificaciones.forEach(function (notificacion) {

        let estado = notificacion.querySelector(".estado").textContent;

        if (estado == "No leída") {

            notificacion.style.display = "block";

        } else {

            notificacion.style.display = "none";

        }

    });

};

//-----------------------------------------
// MARCAR TODAS COMO LEÍDAS
//-----------------------------------------

botonMarcar.onclick = function () {

    notificaciones.forEach(function (notificacion) {

        let estado = notificacion.querySelector(".estado");

        estado.textContent = "Leída";

        notificacion.classList.remove("nueva");

    });

    alert("Todas las notificaciones fueron marcadas como leídas.");

};

//-----------------------------------------
// ABRIR NOTIFICACIÓN
//-----------------------------------------

notificaciones.forEach(function (notificacion) {

    notificacion.onclick = function () {

        let estado = this.querySelector(".estado");

        estado.textContent = "Leída";

        this.classList.remove("nueva");

        alert("Notificación abierta.");

    };

});

//-----------------------------------------
// VOLVER
//-----------------------------------------

botonVolver.onclick = function () {

    window.location.href = "inicio.html";

};