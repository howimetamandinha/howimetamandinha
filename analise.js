function analisarIntervalo(inicio, fim) {
    let pares = 0, impares = 0, divisiveisPor5 = 0;

    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) pares++;
        else impares++;
        if (i % 5 === 0) divisiveisPor5++;
    }

    return { pares, impares, divisiveisPor5 };
}
