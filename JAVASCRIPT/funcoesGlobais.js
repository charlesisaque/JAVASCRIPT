function saudação() {
    console.log("E aí, beleza?");
}

setTimeout(saudação, 2000);

let contador = 0;

const id = setInterval(() => {
    contador++;
    console.log('Tempo decorrido (em segundos):', contador);
    if (contador == 10) {
        clearInterval(id);
    }
}, 1000);