function nuevoArreglo(numero) {
    let arreglo = Array.from({ length: numero }, (_, i) => i + 1);
    let resultado = [];
    for (let index in arreglo) {
      resultado.push(arreglo[index]);
    }
    return resultado;
  }