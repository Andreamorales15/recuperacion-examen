function elementos(array1, array2) {
    let comunes = [];
  
    for (let i = 0; i < arreglo1.length; i++) {
      if (array2.includes(arreglo1[i])) {
        comunes.push(arreglo1[i]);
      }
    }
  
    return comunes;
  }
  

  console.log(elementos ([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));