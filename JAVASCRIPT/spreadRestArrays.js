const frutas = ['Maçã', 'banana', 'goiaba'];

const maisFrutas = ['Uva', 'Morango', 'Kiwi'];

const clone = [...frutas];

frutas.push('Pitanga');

console.log(frutas);
console.log(maisFrutas);
console.log(clone);

const todasAsFrutas = [...frutas, ...maisFrutas];

console.log(todasAsFrutas);

const [primeira, segunda, ...restante] = todasAsFrutas;

console.log(primeira);
console.log(segunda);
console.log(restante);