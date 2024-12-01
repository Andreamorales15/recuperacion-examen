function numerosMayoresQue(array, num) {
   
    return array.filter(numero => numero > num);
}
let numeros = [5, 12, 7, 18, 3, 25, 9];

let  numeroDado = 10;
let  resultado = numerosMayoresQue(numeros, numeroDado);
console.log("Números mayores que", numeroDado, ":", resultado);
