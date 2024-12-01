function encontrarMismoNumero(array) {
    let contador = {};
    let duplicados = [];

        for (let i = 0; i < array.length; i++) {
         elemento = array[i];
        contador[elemento] = (contador[elemento] || 0) + 1;

        
        if (contador[elemento] === 2) {
            duplicados.push(elemento);
        }
    }

    return duplicados;
}
let numeros = [1, 2, 3, 4, 2, 5, 3, 6, 7, 1];
let duplicados = encontrarMismoNumero(numeros);
console.log("Duplicados encontrados:", duplicados);
