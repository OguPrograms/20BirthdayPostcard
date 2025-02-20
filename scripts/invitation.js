if (!localStorage.getItem("input_nameValue") || !localStorage.getItem("input_surnameValue")) {
    window.location.href = "index.html";
}

document.addEventListener('DOMContentLoaded', function() {
    start();

    // Inicializar Swiper
    const swiperEl = document.querySelector('.mySwiper');
    swiperEl.addEventListener('slidechange', function(event) {
        const activeIndex = event.detail[0].activeIndex;
        comprobarDiapositiva(activeIndex);
    });
});


function start() {
    var nombre_span = document.getElementById('nombre');
    nombre_span.innerHTML = localStorage.getItem("input_nameValue");
}

// Función para calcular el tiempo transcurrido desde el 13 de enero de 2025
function tiempoTranscurrido() {
    const fechaInicio = new Date('2025-01-13T23:00:00Z');
    const fechaActual = new Date(); // Fecha actual
    const span_time = document.getElementById("transcurred-time");

    const diferencia = fechaActual.getTime() - fechaInicio.getTime();

    const meses = Math.floor(diferencia / (2592000000));
    const dias = Math.floor((diferencia - meses * 2592000000) / (86400000));
    const horas = Math.floor((diferencia - meses * (2592000000) - dias * (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    span_time.innerHTML = `${meses}mes, ${dias}dias, ${horas}h, ${minutos}m y ${segundos}s`;
}


function comprobarDiapositiva(){
    console.log("aaa")
    // const swiper_time = document.querySelector('[aria-label="3 / 6"]');
    // const swiper_conffeti = document.querySelector('[aria-label="6 / 6"]');
    if (activeIndex === 2) {
        setInterval(tiempoTranscurrido, 1000);
    } else if (activeIndex === 5) {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0 }
        });
    }
}
