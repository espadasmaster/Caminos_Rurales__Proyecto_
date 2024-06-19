let numFrames = 40;
let whichFrame = 0;
let frames = [];
let portada;
var b;
let nextTimer = 0;
let delay = 1000;


function preload(){
  
 portada = loadImage("inicio.png");
 //inicio
 frames[0] = loadImage("Inicio/escena1.png");
 frames[1] = loadImage("Inicio/escena2.png");
 frames[2] = loadImage("Inicio/escena3.png");
 frames[3] = loadImage("Inicio/escena4.png");
 
}

function transicion(){
    if (fade>255) {
      //fade += fadeAmount; 
      fadeAmount=-7;

    }
    else if (fade < 0){
      fadeAmount = 0;
      fade = 0;
    }
}

function setup() {
createCanvas(1360, 600);
b = createButton("iniciar");
b.position(650, 300);
b.mousePressed(inicio);


nextTimer = millis() + delay;
}

function inicio(){

   
 image(frames[whichFrame], 330, 0, 650, 600);


  // checks if enough time has passed
  // since we last changed the frame and we
  // need to do it again.
  if (millis() > nextTimer) {
    whichFrame = whichFrame + 1;
    // loop around to the beginning.
    if (whichFrame >= frames.length) {
      whichFrame = 0;
    }
    // reset the timer for the next frame.
    nextTimer = millis() + delay;
  }
  
 

  
}

function draw() {
background(0);
 image(portada, 330, 0, 650, 600);
 
}