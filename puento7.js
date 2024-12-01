function palabraPalindromo(palabra) {
    
    let palabraReversa = palabra.toLowerCase().split("").reverse().join("");
    return palabra.toLowerCase() === palabraReversa;
}
let palabra = "oso";
let resultado = palabraPalindromo(palabra);
console.log(`La palabra "${palabra}" ${resultado ? 'es' : 'no es'} un palíndromo.`);
