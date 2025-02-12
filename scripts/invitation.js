if (!localStorage.getItem("input_nameValue") && !localStorage.getItem("input_surnameValue")) {
    window.location.href = "index.html";
}

// Inicializar Swiper
const swiper = new Swiper('.swiper-container', {
    loop: true, // Hacer que el slider sea infinito (opcional)
    slidesPerView: 1,
    spaceBetween: 10,
    // Configuración básica
    on: {
        slideChange: function() {
            // Cuando cambie la diapositiva
            comprobarDiapositiva();
        }
    }
});

// Fecha objetivo: 13 de enero de 2025
const fechaObjetivo = new Date(2025, 0, 13); // Enero es el mes 0 en JavaScript
let intervalo;

function actualizarTiempo() {
    const fechaActual = new Date();
    const diferencia = fechaActual - fechaObjetivo;
    const segundos = Math.floor(diferencia / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);
    const meses = Math.floor(dias / 30.44); // Promedio de días en un mes

    console.log(`Han pasado ${meses} meses, ${dias} días, ${horas} horas, ${minutos} minutos y ${segundos} segundos desde el 13 de enero de 2025.`);
}

function comprobarDiapositiva() {
    // Verificar si la diapositiva activa tiene la clase 'swiper-slide-active'
    const diapositivaActiva = document.querySelector('.swiper-slide-active');
    
    if (diapositivaActiva && diapositivaActiva === swiper.slides[0]) {
        // Si estamos en la primera diapositiva, iniciar el contador en tiempo real
        if (!intervalo) { // Solo iniciar si no hay un intervalo corriendo
            intervalo = setInterval(actualizarTiempo, 1000);
        }
    } else {
        // Si no estamos en la primera diapositiva, detener el contador
        if (intervalo) {
            clearInterval(intervalo);
            intervalo = null; // Resetear el intervalo
        }
    }
}

// Llamar a la función de comprobación al principio
comprobarDiapositiva();
