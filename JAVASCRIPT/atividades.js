// 1. Atividade
// Crie uma variável idade e verifique se a pessoa é maior de idade
// (18 anos ou mais). Mostre no console uma mensagem adequada.

console.log("Verificação de maioridade");
let idade = 18;
console.log("Idade: ", idade);
let maiorIdade = idade >= 18;
console.log("Sou maior de idade? ", maiorIdade);

// 2. Atividade
// Crie duas variáveis com notas de um aluno.
// Calcule a média. Se for maior ou igual a 7, mostre "Aprovado".
// Caso contrário, mostre "Reprovado".
console.log("Situação do aluno");
let primeiraNota = 6.0;
console.log("Primeira Nota: ", primeiraNota);
let segundaNota = 8.0;
console.log("Segunda nota: ", segundaNota);
let mediaFinal = (primeiraNota + segundaNota) / 2;
console.log("Media: ", mediaFinal);
let resultadoFinal;
if (mediaFinal >= 7) {
  resultadoFinal = "Aprovado!";
} else {
  resultadoFinal = "Reprovado...";
}
console.log("Resultado final: ", resultadoFinal);

// 3. Atividade
// Crie uma variável valorCompra com 35.90 e valorPago com 50.
// Calcule e mostre o troco a ser devolvido.

console.log("Simulação de troco");
let valorCompra = 35.9;
console.log("Valor da Compra: ", valorCompra);
let valorPago = 50.0;
console.log("Valor Recebido: ", valorPago);
let troco = valorPago - valorCompra;
console.log("Valor a ser devolvido: ", troco);

// 4. Atividade
// Crie duas variáveis com senhas digitadas em momentos diferentes.
// Verifique se são iguais usando operadores de comparação.

console.log("Validação de Senha");
let primeiraSenha = 1234;
console.log("Primeira senha: ", primeiraSenha);
let segundaSenha = 4321;
console.log("Segunda senha: ", segundaSenha);
let comparacao = primeiraSenha == segundaSenha;
console.log("As senhas são iguais? ", comparacao);

// 5. Atividade
// Considere totalAulas = 80 e faltas = 25.
// Calcule se as faltas ultrapassam 25% das aulas.
// Mostre a conclusão no console.

console.log("Controle de faltas");
let totalAulas = 80;
console.log("Total de Aulas: ", totalAulas);
let faltas = 25;
console.log("Faltas: ", faltas);
function calcularPorcentagem(faltas, totalAulas) {
  return (faltas / totalAulas) * 100;
}
let porcentagem = calcularPorcentagem(faltas, totalAulas);
console.log("Porcentagem de faltas:", porcentagem + "%");

if (porcentagem > 25) {
  console.log("Reprovado por faltas");
} else {
  console.log("Dentro do limite de faltas");
}

// 6. Atividade
// Crie duas variáveis temLogin e temSenha.
// Use operadores lógicos para verificar se
// o usuário pode acessar o sistema.
console.log("Verificação de login");
let temLogin = true;
let temSenha = true;

let acessarSistema = temLogin && temSenha;
console.log("Usuário pode acessar o sistema?:", acessarSistema);

// 7. Atividade
// Crie uma variável booleana chamada disponível.
//  Mostre seu valor negado no console, ou seja,
//  se estiver disponível, exiba que não está, e vice-versa.
console.log("Valor negado");
let disponivel = true;
console.log("Está disponivel?");
if (disponivel) {
  console.log("Não está disponivel");
} else {
  console.log("Está disponivel");
}

// 8.Atividade
// Crie duas variáveis com números.
// Verifique se os dois são pares e se são iguais.
// Exiba a conclusão.
console.log("Condições compostas");
let num1 = 8;
let num2 = 8;

let ambosPares = num1 % 2 === 0 && num2 % 2 === 0;
let saoIguais = num1 === num2;

if (ambosPares && saoIguais) {
  console.log("Os dois números são pares e iguais.");
} else if (ambosPares) {
  console.log("Os dois números são pares, mas não são iguais.");
} else if (saoIguais) {
  console.log("Os números são iguais, mas não são pares.");
} else {
  console.log("Os números não são pares nem iguais.");
}

// Atividade 9.
// Calcule quanto é 15% de 120 usando operadores matemáticos.
// Mostre a frase: "15% de 120 é igual a X."
console.log("Calculadora de porcentagem");
let primeiroNum = 15;
let segundoNum = 120;

function calcularPorcentagem(percentual, total) {
  return (percentual / 100) * total;
}
let porcentageM = calcularPorcentagem(primeiroNum, segundoNum);
console.log("15% de 120 é igual a: ", porcentageM);

// Atividade 10.
// Escreva a expressão 2 + 3 * 5.
// Mostre o resultado e explique por que a multiplicação
// foi feita antes da soma.
console.log("Ordem de operações");
let expressao = 2 + 3 * 5;
console.log("Expressão: 2 + 3 * 5");
console.log("Resultado: ", expressao);

// 'A multiplicação foi feita antes da soma
//  por causa da ordem de precedência dos operadores.'
