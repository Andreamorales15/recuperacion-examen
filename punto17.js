function eliminarDuplicados(array) {
    return [...new Set(array)];
}

let array = [1, 2, 2, 3, 4, 4, 5];

let resultado = eliminarDuplicados(array);

console.log("Array sin duplicados:", resultado);
