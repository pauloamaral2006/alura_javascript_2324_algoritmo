const libros = require("./listaLivros");

let maisBarato = 0;

for (let atual = 0; atual < libros.length; atual++) {
  if (libros[atual].preco < libros[maisBarato].preco) {
    maisBarato = atual;
  }
}

console.log(
  `o livro mais barato custa ${libros[maisBarato].preco} e o título é  ${libros[maisBarato].titulo}`,
);
