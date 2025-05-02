const livros = [
    { titulo: "Livro A", autor: "Autor A", ano: 2000 },
    { titulo: "Livro B", autor: "Autor B", ano: 2010 },
    { titulo: "Livro C", autor: "Autor C", ano: 2020 },
];

function buscarLivro(titulo) {
    const livro = livros.find(livro => livro.titulo === titulo);
    return livro ? livro : "Livro não encontrado.";
}
