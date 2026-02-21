const idade = 17

idade = 18

if(idade >=18) {
    console.log('É Maior de Idade')
} else {
    console.log('É Menor de Idade')
}

const notaDoAluno = 8;

if (notaDoAluno >= 9) {
    console.log('Nota excelente');
} else if (notaDoAluno >= 7) {
    console.log('Nota boa');
}

else if (notaDoAluno >= 4) {
    console.log('Nota mediana');
} else {
    console.log('Nota ruim');
}
// Operador Ternário (Substituto do If e Else )
idade >= 18 ? console.log('maior de idade') : console.log('menor de idade')

notaDoAluno >= 9 ? console.log('excelente') :
notaDoAluno >= 7 ? console.log('boa') :
notaDoAluno >= 4 ? console.log('mediana') :
console.log('ruim')