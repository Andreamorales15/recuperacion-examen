function sumarNumerosPares(array) {
    
    return array.filter(numero => numero % 2 === 0)
                .reduce((acumulador, numero) => acumulador + numero, 0);
}

let numeros = [5, 12, 7, 18, 3, 25, 9, 8];
let sumaPares = sumarNumerosPares(numeros);
console.log("La suma de los números pares es:", sumaPares);
