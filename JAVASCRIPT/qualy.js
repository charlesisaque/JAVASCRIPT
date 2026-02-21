// Qualy F1 - Cronômetro preciso (Node.js)

const setores = [
  { nome: "Setor 1", limite: 18.386 },
  { nome: "Setor 2", limite: 18.386 + 33.174 },
  { nome: "Setor 3", limite: 18.386 + 33.174 + 18.710 }
];

let inicio = process.hrtime.bigint();
let setorAtual = 0;
let intervalo;

function formatarSegundos(seg) {
  return seg.toFixed(3).padStart(6, "0");
}

function formatarTempoFinal(total) {
  const min = Math.floor(total / 60);
  const seg = total % 60;
  return `${min}:${formatarSegundos(seg)}`;
}

console.clear();
console.log(" Qualy F1 – Cronômetro");
console.log("====================================");

intervalo = setInterval(() => {
  const agora = process.hrtime.bigint();
  const tempoDecorrido = Number(agora - inicio) / 1e9;

  process.stdout.write(`\r Tempo: ${formatarSegundos(tempoDecorrido)}s`);

  // Marca setor no tempo exato configurado
  if (setorAtual < setores.length && tempoDecorrido >= setores[setorAtual].limite) {
    const setorInicio = setores[setorAtual - 1]?.limite || 0;
    const tempoSetor = setores[setorAtual].limite - setorInicio;

    console.log(`\n ${setores[setorAtual].nome}: ${formatarSegundos(tempoSetor)}s`);
    setorAtual++;
  }

  // Final da volta
  if (setorAtual === setores.length) {
    clearInterval(intervalo);
    const tempoFinal = setores[2].limite;
    console.log("------------------------------------");
    console.log(` Tempo Final da Volta: ${formatarTempoFinal(tempoFinal)}`);
  }
}, 1);
