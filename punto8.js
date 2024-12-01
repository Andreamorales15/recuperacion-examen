function filtrarNumeros(array) {
    return array.filter(numero => numero > 10);
}


let numeros = [5, 12, 7, 18, 3, 25, 9];
let numerosFiltrados = filtrarNumeros(numeros);
console.log("Números mayores a 10:", numerosFiltrados);
