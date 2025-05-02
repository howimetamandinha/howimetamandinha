function jogoAdivinhacao() {
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    let tentativas = 7;

    while (tentativas > 0) {
        const palpite = parseInt(prompt("Digite seu palpite:"));
        if (palpite === numeroSecreto) {
            return "Parabéns! Você acertou!";
        } else if (palpite < numeroSecreto) {
            console.log("O número é maior.");
        } else {
            console.log("O número é menor.");
        }
        tentativas--;
    }

    return "Você perdeu! O número era " + numeroSecreto;
}
