function MayorAMenor(numeros) {
    let a = numeros.length;
    for (let i = 0; i < a - 1; i++) { 
        for (let j = 0; j <  a- i - 1; j++) { 
            if (numeros[j] > numeros[j + 1]) {
                
                let temp = numeros[j];
                numeros[j] = numeros[j + 1];
                numeros[j + 1] = temp;
            }
        }
    }
    return numeros;
}

let numeros = [5, 3, 8, 4, 2,1];

let numeroMayor = MayorAMenor(numeros);
console.log("el numero de mayor a menor organixado es ", numeroMayor);
