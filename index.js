const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const contenedor = document.querySelector('.contenedor');

yesBtn.addEventListener('click', function () {
    // Crear una celebración más elaborada
    contenedor.innerHTML = `
        <h1 class="titulo">¡Sabía que dirías que sí! ❤️</h1>
        <div class="celebracion">
            <img src="celebracion.gif" alt="Celebración" class="imagen-celebracion">
            <p class="mensaje-amor">¡Te quiero mucho!</p>
        </div>
    `;
    // Agregar confeti o efectos visuales
    crearConfeti();
});

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 80); // Limitado a 80 para evitar desbordamiento
    const randomY = parseInt(Math.random() * 80);
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = `${randomY}%`;
    noBtn.style.left = `${randomX}%`;
    noBtn.style.transition = 'all 0.3s ease';
});

// Función para crear efecto de confeti
function crearConfeti() {
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti');
        confeti.style.left = Math.random() * 100 + 'vw';
        confeti.style.animationDelay = Math.random() * 3 + 's';
        contenedor.appendChild(confeti);
    }
}
// En el evento click del botón Sí:
yesBtn.addEventListener('click', function () {
    contenedor.innerHTML = `
        <div class="celebracion">
            <h1 class="titulo-celebracion">¡Sabía que dirías que sí! ❤️</h1>
            <p class="mensaje-amor">Eres lo mejor que me ha pasado</p>
        </div>
    `;
    crearCorazones();
});

function crearCorazones() {
    const crearCorazon = () => {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        
        // Posición inicial aleatoria en el eje X
        corazon.style.left = Math.random() * 100 + 'vw';
        
        // Tamaño aleatorio para cada corazón
        const tamano = Math.random() * (30 - 10) + 10;
        corazon.style.fontSize = tamano + 'px';
        
        corazon.innerHTML = '❤️';
        document.body.appendChild(corazon);

        // Eliminar el corazón después de la animación
        setTimeout(() => {
            corazon.remove();
        }, 6000);
    }

    // Crear corazones cada 100ms
    setInterval(crearCorazon, 100);
}