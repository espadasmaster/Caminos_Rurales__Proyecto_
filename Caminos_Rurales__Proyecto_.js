let numFrames = 37; // Actualizamos el total de frames
let whichFrame = 0;
let frames = [];
let portada;
let b;
let nextTimer = 0;
let delay = 1000;
let animating = false;
let derechaButton, izquierdaButton, usarCruzButton, entregarAlmaButton, rightFrame8Button, leftFrame8Button, resetButton;

function preload() {
    portada = loadImage("inicio.png");
    //inicio
    frames[0] = loadImage("Inicio/escena1.png");
    frames[1] = loadImage("Inicio/escena2.png");
    frames[2] = loadImage("Inicio/escena3.png");
    frames[3] = loadImage("Inicio/escena4.png");
    //derecha
    frames[4] = loadImage("derecha/escena1.png");
    frames[5] = loadImage("derecha/escena2.png");
    frames[6] = loadImage("derecha/escena3.png");
    frames[7] = loadImage("derecha/escena4.png");
    //cueva
    frames[8] = loadImage("cueva/escena1.png");
    frames[9] = loadImage("cueva/escena2.png");
    frames[10] = loadImage("cueva/escena3.png");
    frames[11] = loadImage("cueva/escena4.png");
    //dentro cueva
    frames[12] = loadImage("Escenasdeboton/escena6.png");
    frames[13] = loadImage("Escenasdeboton/escena7.png");
    frames[14] = loadImage("Escenasdeboton/escena8.png");
    frames[15] = loadImage("Escenasdeboton/escena9.png");
    frames[16] = loadImage("Escenasdeboton/escena10.png");
    //usar cruz
    frames[17] = loadImage("cruz/escena1.png");
    frames[18] = loadImage("cruz/escena2.png");
    frames[19] = loadImage("cruz/escena3.png");
    frames[20] = loadImage("cruz/escena4.png");
    frames[21] = loadImage("cruz/escena5.png");
    //vender
    frames[22] = loadImage("vender/escena1.png");
    frames[23] = loadImage("vender/escena2.png");
    frames[24] = loadImage("vender/escena3.png");
    frames[25] = loadImage("vender/escena4.png");
    frames[26] = loadImage("vender/escena5.png");
    //puente
    frames[27] = loadImage("puente/escena1.png");
    frames[28] = loadImage("puente/escena2.png");
    frames[29] = loadImage("puente/escena3.png");
    frames[30] = loadImage("puente/escena4.png");
    //caida puente
    frames[31] = loadImage("caida/escena1.png");
    frames[32] = loadImage("caida/escena2.png");
    frames[33] = loadImage("caida/escena3.png");
    frames[34] = loadImage("caida/escena4.png");
    frames[35] = loadImage("caida/escena5.png");
    frames[36] = loadImage("caida/escena6.png");
}

function setup() {
    createCanvas(1360, 600);
    b = createButton("iniciar");
    b.position(650, 300);
    b.mousePressed(inicio);
    configurarb();
}

function inicio() {
    if (!animating) {
        animating = true;
        nextTimer = millis() + delay;
        b.position(10, 10); // Cambiar la posición del botón a la izquierda
        b.hide(); // Ocultar el botón después de ser presionado
    }
}

function draw() {
    background(0);
    image(portada, 330, 0, 650, 600);

    if (animating && millis() > nextTimer) {
        whichFrame = (whichFrame + 1) % numFrames;
        nextTimer = millis() + delay;

        if (whichFrame == 4) { // Detener la animación al llegar al frame[4]
            animating = false;
            showDerechaButton(); // Mostrar el botón "derecha"
        }

        if (whichFrame == 8) { // Detener la animación al llegar al frame[8]
            animating = false;
            showFrame8Buttons(); // Mostrar los botones "derecha" y "izquierda" en el frame[8]
        }

        if (whichFrame == 16) { // Detener la animación al llegar al frame[16]
            animating = false;
            showEndChoiceButtons(); // Mostrar los botones de elección al final
        }

        if (whichFrame == 21) { // Detener la animación después del frame[21]
            animating = false;
            showResetButton(); // Mostrar el botón de reinicio
        }

        if (whichFrame == 26) { // Detener la animación después del frame[26]
            animating = false;
            showResetButton(); // Mostrar el botón de reinicio
        }

        if (whichFrame == 36) { // Detener la animación después del frame[36]
            animating = false;
            showResetButton(); // Mostrar el botón de reinicio
        }
    }

    image(frames[whichFrame], 330, 0, 650, 600);
}

function configurarb() {
    b.style("border", "3px solid black");
}

function showDerechaButton() {
    if (!derechaButton) {
        derechaButton = createButton("derecha");
        derechaButton.position(650, 300);
        derechaButton.mousePressed(nextAnimation);
        derechaButton.style("border", "3px solid black");
    }
}

function showFrame8Buttons() {
    if (!rightFrame8Button) {
        rightFrame8Button = createButton("derecha");
        rightFrame8Button.position(750, 300);
        rightFrame8Button.mousePressed(rightPathFromFrame8);
        rightFrame8Button.style("border", "3px solid black");
    }

    if (!leftFrame8Button) {
        leftFrame8Button = createButton("izquierda");
        leftFrame8Button.position(550, 300);
        leftFrame8Button.mousePressed(leftPathFromFrame8);
        leftFrame8Button.style("border", "3px solid black");
    }
}

function showChoiceButtons() {
    if (!izquierdaButton) {
        izquierdaButton = createButton("izquierda");
        izquierdaButton.position(200, 300);
        izquierdaButton.mousePressed(leftPath);
        izquierdaButton.style("border", "3px solid black");
    }

    if (!derechaButton) {
        derechaButton = createButton("derecha");
        derechaButton.position(600, 300);
        derechaButton.mousePressed(rightPath);
        derechaButton.style("border", "3px solid black");
    }
}

function showEndChoiceButtons() {
    if (!usarCruzButton) {
        usarCruzButton = createButton("usar cruz");
        usarCruzButton.position(200, 300);
        usarCruzButton.mousePressed(usarCruzPath);
        usarCruzButton.style("border", "3px solid black");
    }

    if (!entregarAlmaButton) {
        entregarAlmaButton = createButton("entregar tu alma");
        entregarAlmaButton.position(1100, 300);
        entregarAlmaButton.mousePressed(entregarAlmaPath);
        entregarAlmaButton.style("border", "3px solid black");
    }
}

function showResetButton() {
    if (!resetButton) {
        resetButton = createButton("reiniciar");
        resetButton.position(650, 500);
        resetButton.mousePressed(resetAnimation);
        resetButton.style("border", "3px solid black");
    }
}

function nextAnimation() {
    animating = true;
    nextTimer = millis() + delay;
    derechaButton.hide(); // Ocultar el botón "derecha" después de presionarlo
}

function leftPath() {
    animating = true;
    nextTimer = millis() + delay;
    izquierdaButton.hide(); // Ocultar el botón "izquierda"
    derechaButton.hide(); // Ocultar el botón "derecha"
    whichFrame = 8; // Continuar con la animación a la izquierda
}

function rightPath() {
    animating = true;
    nextTimer = millis() + delay;
    izquierdaButton.hide(); // Ocultar el botón "izquierda"
    derechaButton.hide(); // Ocultar el botón "derecha"
    whichFrame = 27; // Continuar con la animación del puente
}

function rightPathFromFrame8() {
    animating = true;
    nextTimer = millis() + delay;
    rightFrame8Button.hide(); // Ocultar el botón "derecha" después de presionarlo en el frame[8]
    leftFrame8Button.hide(); // Ocultar el botón "izquierda" después de presionarlo en el frame[8]
    whichFrame = 27; // Continuar con la animación del puente desde el frame[27]
}

function leftPathFromFrame8() {
    animating = true;
    nextTimer = millis() + delay;
    rightFrame8Button.hide(); // Ocultar el botón "derecha" después de presionarlo en el frame[8]
    leftFrame8Button.hide(); // Ocultar el botón "izquierda" después de presionarlo en el frame[8]
    whichFrame = 8; // Continuar con la animación a la izquierda
}

function usarCruzPath() {
    animating = true;
    nextTimer = millis() + delay;
    usarCruzButton.hide(); // Ocultar el botón "usar cruz"
    entregarAlmaButton.hide(); // Ocultar el botón "entregar tu alma"
    whichFrame = 17; // Continuar con la animación "usar cruz"
}

function entregarAlmaPath() {
    animating = true;
    nextTimer = millis() + delay;
    usarCruzButton.hide(); // Ocultar el botón "usar cruz"
    entregarAlmaButton.hide(); // Ocultar el botón "entregar tu alma"
    whichFrame = 22; // Continuar con la animación "entregar tu alma"
}

function resetAnimation() {
    location.reload(); // Recargar la página
}