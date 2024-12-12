const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const contenedor = document.querySelector('.contenedor');

// Función para crear los corazones
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

// Función para mostrar mensaje al hacer click en el botón especial
function mostrarMensaje() {
    alert('Te amo muchísimo ❤️');
}

// Evento click del botón Sí
yesBtn.addEventListener('click', function () {
    // Crear y reproducir el sonido
    const audio = new Audio('music/finalaudio.mp3'); // Reemplaza con tu archivo
    audio.play();

    contenedor.innerHTML = `
        <div class="celebracion">
            <h1 class="titulo-celebracion">¡Sabía que dirías que sí! ❤️</h1>
            <p class="mensaje-amor">Eres lo mejor que me ha pasado</p>
            <button class="boton-especial" onclick="mostrarMensaje()">Click Aquí ❤️</button>
        </div>
    `;
    crearCorazones();
});

// Evento para el botón No
noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random() * 80);
    const randomY = parseInt(Math.random() * 80);
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transition = 'all 0.3s ease';
});