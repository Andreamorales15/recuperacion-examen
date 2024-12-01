function pasarAMayusculas(array) {
       return array.map(cadena => cadena.toUpperCase());
}

let palabras = ["hola", "mundo", "javascript", "programacion"];
let palabrasMayusculas = pasarAMayusculas(palabras);
console.log("Las Palabras en mayúsculas son:", palabrasMayusculas);
