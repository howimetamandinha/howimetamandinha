function caixaEletronico() {
    let saldo = 1000;
    let opcao;

    do {
        opcao = prompt("Escolha uma opção: 1-Depósito, 2-Saque, 3-Verificar saldo, 4-Sair");
        switch (opcao) {
            case "1":
                const deposito = parseFloat(prompt("Digite o valor do depósito:"));
                saldo += deposito;
                break;
            case "2":
                const saque = parseFloat(prompt("Digite o valor do saque:"));
                if (saque <= saldo) saldo -= saque;
                else console.log("Saldo insuficiente.");
                break;
            case "3":
                console.log(`Seu saldo é: R$${saldo}`);
                break;
        }
    } while (opcao !== "4");
}
