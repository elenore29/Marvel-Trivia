const seccion1 = document.getElementById('seccion1');
const seccion2 = document.getElementById('seccion2');
const preguntas1h = document.getElementById('preguntas1h');
const preguntas2h = document.getElementById('preguntas2h');
const preguntas3h = document.getElementById('preguntas3h');
const preguntas1v = document.getElementById('preguntas1v');
const preguntas2v = document.getElementById('preguntas2v');
const preguntas3v = document.getElementById('preguntas3v');
const respuestas = document.getElementById('respuestas');
const correctas = document.getElementById('correctas');
const incorrectas = document.getElementById('incorrectas');

let correcto = 0;
let incorrecto = 0; 

const siguiente = () => {
  const nameInput = document.getElementById ('name-input').value; 
  const printName = document.getElementById ('print-name'); 
  printName.innerHTML = nameInput;
  seccion1.classList.add('hide');
  seccion2.classList.remove('hide');
}

const heroes = () => {
  seccion2.classList.add('hide');
  pregunta1h.classList.remove('hide');
}

const heroes2 = () => {
  incorrecto++;
  pregunta1h.classList.add('hide');
  pregunta2h.classList.remove('hide');
  
}

const heroesc2 = () => {
  correcto++;
  pregunta1h.classList.add('hide');
  pregunta2h.classList.remove('hide');
  
}

const heroes3 = () => {
  incorrecto++;
  pregunta2h.classList.add('hide');
  pregunta3h.classList.remove('hide');
  
}

const heroesc3 = () => {
  correcto++;
  pregunta2h.classList.add('hide');
  pregunta3h.classList.remove('hide');
  
}

const heroes4 = () => {
  incorrecto++;
  pregunta3h.classList.add('hide');
  respuestas.classList.remove('hide');
  suma();
}

const heroesc4 = () => {
  correcto++;
  pregunta3h.classList.add('hide');
  respuestas.classList.remove('hide');
  suma();
}

const villanos = () => {
  
  seccion2.classList.add('hide');
  pregunta1v.classList.remove('hide');
}

const villanos2 = () => {
  incorrecto++; 
  pregunta1v.classList.add('hide');
  pregunta2v.classList.remove('hide');
 
}

const villanosc2 = () => {
  correcto++; 
  pregunta1v.classList.add('hide');
  pregunta2v.classList.remove('hide');
  
}

const villanos3 = () => {
  incorrecto++; 
  pregunta2v.classList.add('hide');
  pregunta3v.classList.remove('hide');
 
}

const villanosc3 = () => {
  correcto++; 
  pregunta2v.classList.add('hide');
  pregunta3v.classList.remove('hide');
  
}

const villanos4 = () => {
  incorrecto++; 
  pregunta3v.classList.add('hide');
  respuestas.classList.remove('hide');
  suma();
}

const villanosc4 = () => {
  correcto++; 
  pregunta3v.classList.add('hide');
  respuestas.classList.remove('hide');
  suma();
  
}

const playAgainH = () => {
  respuestas.classList.add('hide');
  pregunta1h.classList.remove('hide');
}

const playAgainV = () => {
  respuestas.classList.add('hide');
  pregunta1v.classList.remove('hide');
}

const suma = () => {
  correctas.innerHTML = correcto;
  incorrectas.innerHTML = incorrecto;
  correcto=0;
  incorrecto=0;
}
