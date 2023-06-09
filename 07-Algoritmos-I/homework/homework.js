"use strict";
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  var array = [];
  var iterador = 1;
  var numero = num;
  array[0] = 1;
  while (numero > 1) {
    for (let i = 2; i < num; i++) {
      if (numero % i === 0) {
        array[iterador] = i;
        iterador++;
        numero = numero / i;
        break;
      }
    }
  }
  return array;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        var aux = array[j];
        array[j] = array[j + 1];
        array[j + 1] = aux;
      }
    }
  }
  return array;
}

function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j - 1] > array[j]) {
        var aux = array[j - 1];
        array[j - 1] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
}

function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  var arrayOrdenado = [];
  for (let i = 0; i < array.length - 1; i++) {
    arrayOrdenado[i] = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < arrayOrdenado[i]) {
        var aux = array[j];
        array[j] = arrayOrdenado[i];
        arrayOrdenado[i] = aux;
      }
    }
  }
  arrayOrdenado[array.length - 1] = array[array.length - 1];
  return arrayOrdenado;
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
