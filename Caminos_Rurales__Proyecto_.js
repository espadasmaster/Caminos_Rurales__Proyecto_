
let botonInicio;
let portada;

var fade;
var fadeAmount = 1;
var frames = [];
var whichFrame = 0;
var delay = 1000;  //milisegundos para el delay
var nextTimer = 0;


function preload(){
 portada = loadImage("inicio.png");
 //inicio
 frames[0] = loadImage("Inicio/escena1.png");
 frames[1] = loadImage("Inicio/escena2.png");
 frames[2] = loadImage("Inicio/escena3.png");
 frames[3] = loadImage("Inicio/escena4.png");
  //cueva
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
nextTimer = millis() + delay;
 //boton de inicio

botonInicio = createButton("comenzar");
botonInicio.position(width/2 - 50, height/2);
botonInicio.mouseClicked(draw);


}



function draw() {
background(0);
 fade += fadeAmount;
 transicion();
 
 image(portada, 210 , 0, 900, 600);
 
 
  image(frames[whichFrame], 0, 0, 1360, 600);

if (millis() > nextTimer) {
    whichFrame = whichFrame + 1;
    // vuelve al inicio en un loop
    if (whichFrame >= frames.length) {
      whichFrame = 0;
    }
    // resetea el tiempo para el siguiente frame 
    nextTimer = millis() + delay;
  }
 

}

function mouseClicked(){
  
  
}