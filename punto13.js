function arreglosNumeros() {
    let arrayNumeros = [];
    for (let i = 1; i <= 20; i++) {
        arrayNumeros.push(i);
    }

    return arrayNumeros;
}

let numerosDel1Al20 = arreglosNumeros();
console.log("los arreglos de los números del 1 al 20 son :", numerosDel1Al20);
