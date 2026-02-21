const agora = new Date()
console.log(agora)

console.log('Ano:', agora.getFullYear())
console.log('Mês 0-11:', agora.getMonth())
console.log('Dia do mês:', agora.getDate())
console.log('Dia da semana 0-6:', agora.getDay())
console.log('Hora:', agora.getHours())
console.log('Minutos:', agora.getMinutes())
console.log('Segundos:', agora.getSeconds())
console.log('Milissegundos:', agora.getMilliseconds())  

const nascimento = new Date(1988, 6, 8)
console.log(nascimento)

const data1 = new Date('1988-07-08T09:30:00.000Z')
console.log(data1)

console.log('Data formatada (BR):', nascimento.toLocaleDateString('pt-BR'))
console.log('Data formatada (US):', nascimento.toLocaleDateString('en-US'))