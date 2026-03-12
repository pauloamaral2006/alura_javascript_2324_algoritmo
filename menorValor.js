function menorValor(arrProdutos, posicaoInicaial) {
  let maisBarato = posicaoInicaial;

  for (let atual = posicaoInicaial; atual < arrProdutos.length; atual++) {
    if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
      maisBarato = atual;
    }
  }

  return maisBarato;
}

module.exports = menorValor;
