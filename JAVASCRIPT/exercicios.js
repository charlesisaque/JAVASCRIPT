// ============================================
// 1. DESTRUCTURING EM OBJETOS
// ============================================
const pessoa = {
  nome: "João Silva",
  idade: 25,
  email: "joao@email.com",
};

const { nome, idade, email } = pessoa;
console.log("1. Destructuring em objetos:");
console.log(`Nome: ${nome}, Idade: ${idade}, Email: ${email}`);
console.log("");

// ============================================
// 2. DESTRUCTURING EM ARRAYS
// ============================================
const linguagens = ["JavaScript", "Python", "Java"];
const [ling1, ling2, ling3] = linguagens;
console.log("2. Destructuring em arrays:");
console.log(`Linguagem 1: ${ling1}`);
console.log(`Linguagem 2: ${ling2}`);
console.log(`Linguagem 3: ${ling3}`);
console.log("");

// ============================================
// 3. REST OPERATOR EM FUNÇÃO
// ============================================
function somarNumeros(...numeros) {
  let total = 0;
  for (let num of numeros) {
    total += num;
  }
  return total;
}

console.log("3. Rest operator em função:");
console.log(`Soma de (5, 10, 15, 20): ${somarNumeros(5, 10, 15, 20)}`);
console.log(`Soma de (2, 3, 5, 7, 11): ${somarNumeros(2, 3, 5, 7, 11)}`);
console.log("");

// ============================================
// 4. SPREAD OPERATOR COM ARRAYS
// ============================================
const frutas1 = ["maçã", "banana"];
const frutas2 = ["laranja", "uva"];
const todasAsFrutas = [...frutas1, ...frutas2];

console.log("4. Spread operator com arrays:");
console.log(`Array 1: ${frutas1}`);
console.log(`Array 2: ${frutas2}`);
console.log(`Combinado: ${todasAsFrutas}`);
console.log("");

// ============================================
// 5. SPREAD OPERATOR COM OBJETOS
// ============================================
const infoPessoa1 = {
  nome: "Maria",
};

const infoPessoa2 = {
  idade: 30,
};

const pessoaCompleta = { ...infoPessoa1, ...infoPessoa2 };

console.log("5. Spread operator com objetos:");
console.log("Objeto 1:", infoPessoa1);
console.log("Objeto 2:", infoPessoa2);
console.log("Combinado:", pessoaCompleta);
console.log("");

// ============================================
// 6. FUNÇÃO COM PARÂMETRO DEFAULT
// ============================================
function saudar(nome = "visitante") {
  console.log(`Olá, ${nome}`);
}

console.log("6. Função com parâmetro default:");
saudar("Carlos");
saudar();
console.log("");

// ============================================
// 7. TRABALHANDO COM DATAS
// ============================================
const dataAtual = new Date();
const dia = dataAtual.getDate();
const mes = dataAtual.getMonth() + 1; // getMonth() retorna 0-11
const ano = dataAtual.getFullYear();

console.log("7. Trabalhando com datas:");
console.log(`Data atual formatada: ${dia}/${mes}/${ano}`);
console.log("");

// ============================================
// 8. MODULARIZAÇÃO COM EXPORT
// ============================================
function somar(a, b) {
  return a + b;
}

console.log("8. Modularização com export:");
console.log(`Função somar(10, 5) = ${somar(10, 5)}`);
console.log("Função somar exportada para uso em outros módulos");
console.log("");

// Exportar para CommonJS
module.exports = { somar };

// ============================================
// 9. OBJETO COM FUNÇÃO CONSTRUTORA
// ============================================
function Livro(titulo, autor) {
  this.titulo = titulo;
  this.autor = autor;
}

const livro1 = new Livro("1984", "George Orwell");
const livro2 = new Livro("O Senhor dos Anéis", "J.R.R. Tolkien");

console.log("9. Objeto com função construtora:");
console.log(`Livro 1: Título = "${livro1.titulo}", Autor = "${livro1.autor}"`);
console.log(`Livro 2: Título = "${livro2.titulo}", Autor = "${livro2.autor}"`);
console.log("");

// ============================================
// 10. MÉTODO NO OBJETO
// ============================================
Livro.prototype.descrever = function () {
  return `"${this.titulo}" foi escrito por ${this.autor}`;
};

console.log("10. Método no objeto:");
console.log(livro1.descrever());
console.log(livro2.descrever());
