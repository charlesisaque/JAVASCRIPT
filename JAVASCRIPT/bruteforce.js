const alvo = "09042008";
const MAX = 99999999;

console.log(`Tentando descobrir: ${alvo}`);
console.log(`Intervalo: 00000000 até ${MAX}\n`);

for (let num = 0; num <= MAX; num++) {
    const tentativa = num.toString().padStart(8, "0");
    
    if (tentativa === alvo) {
        console.log("\n" + "=".repeat(50));
        console.log(`!!! ACHOU em ${num.toLocaleString()} tentativas !!!`);
        console.log("Senha →", tentativa);
        console.log("=".repeat(50));
        break;
    }
    
    // progresso visual (opcional – comente se quiser mais velocidade)
    if (num % 500000 === 0) {
        process.stdout.write(`\rProgresso: ${(num / MAX * 100).toFixed(2)}%`);
    }
}