
let ini;
let botonInicio;
let x = 1360;
let y = 600;


function preload() {
  // Carga la imagen antes de que comience el programa
  img = loadImage('imag/inicio.png');
}


function setup() {
createCanvas(1360, 600);


ini = loadImage('imag/inicio.png');

 botonInicio = createButton('iniciar');
  botonInicio.position(650, 300);
  botonInicio.mousePressed(draw);
  
}


function draw() {
background(100);

image(ini, x, y);


}
