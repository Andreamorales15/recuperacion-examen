function crearObjeto(claves, valores) {
    return claves.reduce((obj, clave, index) => {
        obj[clave] = valores[index];
        return obj;
    }, {});
}

let claves = ["nombre", "edad", "ciudad"];
let valores = ["Juan", 25, "Bogotá"];
let resultado = crearObjeto(claves, valores);

console.log("Objeto resultante:", resultado);
