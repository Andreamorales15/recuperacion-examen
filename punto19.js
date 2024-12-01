function contarPalabra(array, palabra) {
    return array.filter(elemento => elemento === palabra).length;
}

let array = ["manzana", "pera", "manzana", "uva", "manzana", "pera"];
let palabra = "manzana";

let resultado = contarPalabra(array, palabra);

console.log(`La palabra '${palabra}' aparece ${resultado} veces.`);
