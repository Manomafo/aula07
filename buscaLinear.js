// 1 - Tente implementar um algoritimo de "BUSCA LINEAR"
// Você pode pesquisar na internet sobre, não há nem um probelma.

// const array = [1,2,4,5,6,7,8,9,10]

// Um elemento vai ser passado, e caso encontrar retornar o ídice dele.
// Ex: Elemento 4 se encontra no índece 2

function buscar(valorDaBusca, listaDeElemento) {
  for (let index = 0; index < listaDeElemento.length; index++) {
    if (listaDeElemento[index] === valorDaBusca) {
      console.log(index);
      return index;
    }
  }
  console.log("Elemento não encontrado");
}
buscar(1, [1, 2, 4, 5, 6, 7, 8, 9, 10]);
