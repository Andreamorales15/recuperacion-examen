function numeroMaximo (numeros) {
    if (numeros.length == 0) {
        return null;
    }
    let maximo = numeros [0];
    for (let i = 1; i < numeros.length; i++){
        if (numeros [i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

let numeros = [2, 4, 7, 8, 3, 9];

let maximo = numeroMaximo(numeros);
console.log ("el numero mas grande de un arreglo es ", maximo);