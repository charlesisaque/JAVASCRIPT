let pessoa = {
    nome: 'Ana',
    idade: 25,
    temCarteira: true
};

// fez aniversário!
pessoa.idade = 26;

pessoa.sobrenome = 'Paula';

console.log('Nome: ', pessoa.nome);
console.log('Sobrenome: ', pessoa.sobrenome);

const livro = {
    titulo: 'O Hobbit',
    autor: 'J. R. R. Tolkien',
    paginas: 310
};

livro.publicado = true;

livro.idiomas = ['Inglês', 'Português', 'Espanhol'];

livro.idiomas.push('Mandarim')

livro.idiomas.push('Francês')

console.log('Livro antes:', livro)

delete livro.paginas

console.log('Livro depois:', livro)

livro['autor']

console.log('Autor do livro', livro['autor'])

console.log('Editora', livro['editora'])

const autor = {
    nome: 'J R R Tolkien',
    nacionalidade: 'Britanico',
    idade: 98
}

console.log('Autor', autor)

// autor: 'J. R. R. Tolkien',

livro.autor = autor

console.log(livro)

livro.autor.nome
livro.autor.nacionalidade

livros: [livro]

