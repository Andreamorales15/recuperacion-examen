function sumasDeArray (numeros){
    let suma = 0 ;
    for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
    }
    return suma ;
}
const arrayNumeros=[1,4,5,6,8];

const resultado=sumasDeArray(arrayNumeros);
console.log("la suma de un arreglo es: " ,resultado);