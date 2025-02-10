// teste SAP
// estudando maneiras de melhorar o código utilizando objeto

let arrayDePassaros = [1, 1, 2, 2, 3];
let arrayDePassaros2 = [4, 1, 1, 2, 4, 4, 2, 3];

function contagemPassaros(array) {
  let contagem = {};

  for (let id of array) {
    contagem[id] = (contagem[id] || 0) + 1;
  }

  return Object.entries(contagem)
    .sort((a, b) => b[1] - a[1] || a[0] - b[0])
    [0][0];
}

console.log("Id mais frequente é:", contagemPassaros(arrayDePassaros));
console.log("Id mais frequente é:", contagemPassaros(arrayDePassaros2));
