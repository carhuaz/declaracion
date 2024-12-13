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
 
 // Función para crear los fuegos artificiales
 function crearFuegosArtificiales() {
    const crearFuego = () => {
        const fuego = document.createElement('div');
        fuego.className = 'fuego-artificial';
        
        // Posición aleatoria
        const posX = Math.random() * 100;
        const posY = 100 + (Math.random() * 30); // Empieza desde abajo
        
        fuego.style.left = posX + 'vw';
        fuego.style.bottom = posY + 'vh';
        
        // Color aleatorio
        const colores = ['#ff0000', '#ffd700', '#ff69b4', '#00ff00', '#ff4500', '#9400d3'];
        const color = colores[Math.floor(Math.random() * colores.length)];
        fuego.style.backgroundColor = color;
        
        document.body.appendChild(fuego);
        
        // Crear las chispas
        setTimeout(() => {
            fuego.classList.add('explotar');
            crearChispas(posX, 100 - posY, color);
            
            // Eliminar después de la animación
            setTimeout(() => {
                fuego.remove();
            }, 1000);
        }, Math.random() * 1000);
    };
 
    // Crear múltiples fuegos artificiales
    for(let i = 0; i < 10; i++) {
        setTimeout(crearFuego, i * 300);
    }
 }
 
 // Función para crear las chispas de la explosión
 function crearChispas(x, y, color) {
    for(let i = 0; i < 20; i++) {
        const chispa = document.createElement('div');
        chispa.className = 'chispa';
        chispa.style.backgroundColor = color;
        
        chispa.style.left = x + 'vw';
        chispa.style.top = y + 'vh';
        
        document.body.appendChild(chispa);
        
        // Dirección aleatoria para cada chispa
        const angle = (Math.random() * 360) * (Math.PI / 180);
        const velocity = 1 + Math.random() * 3;
        chispa.style.transform = `rotate(${angle}rad) translateY(${velocity}px)`;
        
        setTimeout(() => {
            chispa.remove();
        }, 1000);
    }
 }
 
 // Función para mostrar mensaje
 function mostrarMensaje() {
    alert('Te amo muchísimo mi aly hermosa muuuuua ❤️');
 }
 
 // Evento click del botón Sí
 yesBtn.addEventListener('click', function () {
    const audio = new Audio('music/finalaudio.mp3'); // Sonido de celebración
    audio.play();
 
    contenedor.innerHTML = `
        <div class="celebracion">
            <h1 class="titulo-celebracion">¡Sabía que dirías que sí! ❤️</h1>
            <p class="mensaje-amor">Eres lo mejor que me ha pasado</p>
            <button class="boton-especial" onclick="mostrarMensaje()">Click Aquí ❤️</button>
        </div>
    `;
    crearCorazones();
    crearFuegosArtificiales();
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
 // Al inicio del archivo, agregamos el contador
let intentosNo = 0;

// Modificamos el evento mouseover del botón No
noBtn.addEventListener('mouseover', function () {
    // Incrementar contador
    intentosNo++;
    
    // Mensajes personalizados según el número de intentos
    if(intentosNo == 5) {
        alert('¡Ya intentaste escapar 5 veces! 😂');
    } else if(intentosNo == 10) {
        alert('¡10 intentos! ¿No te cansas? 😆');
    } else if(intentosNo == 15) {
        alert('¡15 veces! ¡Eres persistente! 🤭');
    } else if(intentosNo == 20) {
        alert('¡20 intentos! Mejor di que sí 💕');
    }

    // Resto del código original
    const sonidoAleatorio = new Audio(sonidosGraciosos[Math.floor(Math.random() * sonidosGraciosos.length)]);
    sonidoAleatorio.volume = 0.4;
    sonidoAleatorio.play();

    const randomX = parseInt(Math.random() * 80);
    const randomY = parseInt(Math.random() * 80);
    
    noBtn.style.position = 'absolute';
    noBtn.style.top = randomY + '%';
    noBtn.style.left = randomX + '%';
    noBtn.style.transition = 'all 0.3s ease';

    const frase = document.createElement('span');
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];
    frase.className = 'frase-flotante';
    frase.style.left = randomX + '%';
    frase.style.top = randomY + '%';
    document.body.appendChild(frase);

    setTimeout(() => {
        frase.remove();
    }, 1000);
});
// Función para el efecto máquina de escribir
function escribirTexto(texto, elemento, velocidad = 100) {
    let i = 0;
    elemento.textContent = ''; // Limpiar el elemento
    
    const escribir = setInterval(() => {
        if(i < texto.length) {
            elemento.textContent += texto.charAt(i);
            i++;
        } else {
            clearInterval(escribir);
        }
    }, velocidad);
}

// Modificamos el evento click del botón Sí
yesBtn.addEventListener('click', function () {
    const audio = new Audio('ruta_de_tu_sonido.mp3');
    audio.play();

    contenedor.innerHTML = `
        <div class="celebracion">
            <h1 class="titulo-celebracion"></h1>
            <p class="mensaje-amor"></p>
            <button class="boton-especial" onclick="mostrarMensaje()">Click Aquí ❤️</button>
        </div>
    `;

    const titulo = document.querySelector('.titulo-celebracion');
    const mensaje = document.querySelector('.mensaje-amor');

    // Escribimos los mensajes secuencialmente
    escribirTexto('¡Sabía que dirías que sí! ❤️', titulo, 100);
    
    // Esperamos a que termine el título para empezar el mensaje
    setTimeout(() => {
        escribirTexto('Eres lo mejor que me ha pasado', mensaje, 100);
    }, 2500); // Ajusta este tiempo según la longitud del título

    crearCorazones();
    crearFuegosArtificiales();
});