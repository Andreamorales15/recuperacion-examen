function textoInvertido (texto) {
    let invertir = "" ;
    for (let i = texto.length - 1; i >= 0; i--) {
        invertir += texto[i];
    }
    return invertir
}

let texto = "hola";

let invertido = textoInvertido(texto);
console.log ("el texto invertido es", invertido);