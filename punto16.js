function elementos(array1, array2) {
   
    return array1.filter(elemento => array2.includes(elemento));
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [4, 5, 6, 7, 8];

let resultado = elementos(array1, array2);
console.log("los Elementos comunes:", resultado);
