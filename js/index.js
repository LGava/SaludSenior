
/*===========================
    ACCESIBILIDAD
===========================*/

let tamañoFuente = 20;

const botonAumentar = document.getElementById("aumentar");
const botonDisminuir = document.getElementById("disminuir");
const botonContraste = document.getElementById("contraste");

const botonLogin = document.getElementById("btnLogin");
const botonRegistro = document.getElementById("btnRegistro");

function aplicarFuente() {
    document.documentElement.style.fontSize = tamañoFuente + "px";
}

function aumentarFuente() {
    tamañoFuente += 2;
    aplicarFuente();
}

function disminuirFuente() {
    if (tamañoFuente > 16) {
        tamañoFuente -= 2;
        aplicarFuente();
    }
}

/* CONTRASTE MEJORADO (CLASE, NO STYLE DIRECTO) */

function cambiarContraste() {
    document.body.classList.toggle("alto-contraste");
}

/* LOGIN */

function iniciarSesion() {
    window.location.href = "login.html";
}

function registrarse() {
    window.location.href = "registro.html";
}

/* EVENTOS */

botonAumentar?.addEventListener("click", aumentarFuente);
botonDisminuir?.addEventListener("click", disminuirFuente);
botonContraste?.addEventListener("click", cambiarContraste);

botonLogin?.addEventListener("click", iniciarSesion);
botonRegistro?.addEventListener("click", registrarse);

/*===========================
    ESTADISTICAS
===========================*/

const stats = document.querySelectorAll("[data-count]");

if (stats.length > 0) {

    const animar = (el) => {
        let objetivo = +el.getAttribute("data-count");
        let actual = 0;
        let incremento = Math.ceil(objetivo / 80);

        let intervalo = setInterval(() => {

            actual += incremento;

            if (actual >= objetivo) {
                actual = objetivo;
                clearInterval(intervalo);
            }
            el.textContent = actual;

        }, 20);
    };

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                animar(entry.target);
                observer.unobserve(entry.target);
            }
        });

    }, { threshold: 0.5 });

    stats.forEach(stat => observer.observe(stat));
}

/*===========================
    CARRUSEL
===========================*/

const track = document.getElementById("carouselTrack");

if (track) {

    let index = 0;
    const total = track.children.length;

    function moverCarrusel() {

        index++;

        if (index >= total) {
            index = 0;
        }

        track.style.transform = `translateX(-${index * 100}%)`;
    }

    setInterval(moverCarrusel, 4500);

}