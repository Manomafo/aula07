// 1- Tente implementar um algoritimo de "BUSCA BINÁRIA"

// function buscaBinaria(lista, item) {
//   for (let inicio = 0, fim = lista.length - 1; inicio <= fim; ) {
//     let meio = Math.floor((inicio + fim) / 2);
//     if (lista[meio] === item) {
//       return meio;
//     } else if (lista[meio] > item) {
//       fim = meio - 1;
//     } else {
//       inicio = meio++;
//     }
//   }
//   return -1;
// }

// const lista = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// ];
// const itemDeBusca = 13;

// const posicao = buscaBinaria(lista, itemDeBusca);

// if (posicao !== -1) {
//   console.log(`O item ${itemDeBusca} está na posição ${posicao}.`);
// } else {
//   console.log("O item não está na lista.");
// }

// Define a função buscaBinaria com os parâmetros valorBuascado e listaDeValores,  oprimeiro é o valor buscando o segundo a lista.
function buscaBinaria(valorBuscando, listaDeValores) {
  // Aqui criamos duas "variaveis" que vão armazenar o índice do começo e do fim da listaDeValores.
  let inicio = 0;
  let fim = listaDeValores.length - 1;

  while (inicio <= fim) {
    // Toda vez que o while rodar vai recriar o meio que será o índice do centro do listaDeValores.
    let meio = Math.floor((inicio + fim) / 2);

    // Retorna o valor do meio caso encotrar o valorBuscado.
    if (listaDeValores[meio] === valorBuscando) {
      return meio;
    } else if (valorBuscando < listaDeValores[meio]) {
      fim = meio;
    } else {
      inicio = meio;
    }
  }
  return -1;
}

console.log(buscaBinaria(8, [1, 3, 6, 8]));
