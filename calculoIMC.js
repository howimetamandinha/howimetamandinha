function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    let categoria;

    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc < 24.9) {
        categoria = "Peso normal";
    } else if (imc < 29.9) {
        categoria = "Sobrepeso";
    } else if (imc < 34.9) {
        categoria = "Obesidade grau I";
    } else if (imc < 39.9) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III";
    }

    return { imc: imc.toFixed(2), categoria };
}
