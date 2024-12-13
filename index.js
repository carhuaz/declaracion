const yesBtn = document.querySelector('#yesBtn');
const noBtn = document.querySelector('#noBtn');
const contenedor = document.querySelector('.contenedor');

// Array de sonidos graciosos
const sonidosGraciosos = [
    'music/error-126627.mp3',
    'music/error-4-199275.mp3',
    'music/error-5-199276.mp3',
    'music/windows-error-sound-effect-35894.mp3'
];

// Frases para el botón No
const frases = [
    '¡Ni lo intentes!',
    '¡Jiji!',
    '¡Muy lento!',
    '¡Casi!',
    '¡Nop!'
];

// Función para crear los corazones
function crearCorazones() {
    const crearCorazon = () => {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon');
        
        corazon.style.left = Math.random() * 100 + 'vw';
        const tamano = Math.random() * (30 - 10) + 10;
        corazon.style.fontSize = tamano + 'px';
        
        corazon.innerHTML = '❤️';
        document.body.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 6000);
    }

    setInterval(crearCorazon, 100);
}

// Función para mostrar mensaje
function mostrarMensaje() {
    alert('Te amo muchísimo ❤️');
}

// Evento click del botón Sí
yesBtn.addEventListener('click', function () {
    const audio = new Audio('ruta_de_tu_sonido.mp3'); // Sonido de celebración
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

// Evento mouseover del botón No
noBtn.addEventListener('mouseover', function () {
    // Reproducir sonido aleatorio
    const sonidoAleatorio = new Audio(sonidosGraciosos[Math.floor(Math.random() * sonidosGraciosos.length)]);
    sonidoAleatorio.volume = 0.4;
    sonidoAleatorio.play();

    // Mover el botón
    const randomX = parseInt(Math.random() * 80);
    const randomY = parseInt(Math.random() * 80);
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transition = 'all 0.3s ease';

    // Mostrar frase aleatoria
    const frase = document.createElement('span');
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];
    frase.className = 'frase-flotante';
    frase.style.left = randomX + '%';
    frase.style.top = randomY + '%';
    document.body.appendChild(frase);

    // Eliminar la frase
    setTimeout(() => {
        frase.remove();
    }, 1000);
});