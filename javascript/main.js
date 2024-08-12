
let userNombre = "";
let userEdad = 0;

const min_edad = 18;
const max_edad = 100; 

let userEdades = []; 

function getUserNombre() {
    userNombre = prompt("¿Cuál es tu nombre?"); 
    console.log("Nombre del usuario: " + userNombre); 
}

function getUserEdad() {
    userEdad = parseInt(prompt("¿Cuántos años tienes?"), 10); 
    if (isNaN(userEdad) || userEdad < min_edad || userEdad > max_edad) {
        alert("Por favor, ingresa una edad válida entre 18 y 100.");
        return; 
    }
    console.log("Edad del usuario: " + userEdad); 
    userEdades.push(userEdad); 
}

function bienvenida() {
    alert("Bienvenido, " + userNombre); 
}

function continuar() {
    let continuarResponder = confirm("¿Deseas continuar?");
    if (continuarResponder) {
        console.log("El usuario ha decidido continuar");
    } else {
        console.log("El usuario ha decidido salir");
    }
}


getUserNombre();
getUserEdad();
bienvenida();
continuar();

console.log("Edades Ingresadas: ", userEdades); 
