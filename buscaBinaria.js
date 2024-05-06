// 1- Tente implementar um algoritimo de "BUSCA BINÁRIA"

function buscaBinaria(lista, item) {
  for (let inicio = 0, fim = lista.length - 1; inicio <= fim; ) {
    let meio = Math.floor((inicio + fim) / 2);
    if (lista[meio] === item) {
      return meio;
    } else if (lista[meio] > item) {
      fim = meio - 1;
    } else {
      inicio = meio++;
    }
  }
  return -1;
}

const lista = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const itemDeBusca = 13;

const posicao = buscaBinaria(lista, itemDeBusca);

if (posicao !== -1) {
  console.log(`O item ${itemDeBusca} está na posição ${posicao}.`);
} else {
  console.log("O item não está na lista.");
}
